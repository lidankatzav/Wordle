import React, { useEffect, useState } from "react";
import { compareWords, getWordOfGame } from "./server-requests";

export function useGame() {

    const [gameState, setGameState] = useState({
      boardArray: Array.from({ length: 6 }, () => ["", "", "", "", ""]),
      colorsArray: Array.from({ length: 6 }, () => ["", "", "", "", ""]),
      colorsMap: new Map<string, string>(),
      currentInput: { row: 0, col: 0 },
      showWelcome: false,
      showWin: false,
      showLost: false,
      wordOfGame: null
    });

    useEffect( () => {
      if(gameState.wordOfGame === null) {
        getNewWordToGame().catch((err) => alert("Networking Error! Please try again!"));
      }
    }, [gameState]);
    
    useEffect(() => {
      if (gameState.currentInput.col === 0 && gameState.currentInput.row >= 1) {
        checkWord();
      }
    }, [gameState.currentInput]);

    useEffect(() => {
      if(gameState.currentInput.row >= 1) {
        const result = checkWinOrLost();
        if(result) {
          gameState.showWin = true;
          const newGameState = Object.create(gameState);
          setGameState(newGameState);
        }
        else if(!result && gameState.currentInput.row === 6) {
          gameState.showLost = true;
          const newGameState = Object.create(gameState);
          setGameState(newGameState);
        }
        updateColorsMap();
      }
    }, [gameState.colorsArray]);

    useEffect(() => {
      if((gameState.showWin === false && gameState.showLost === false && gameState.currentInput.row >= 1) ) {
        setGameState({
          boardArray: Array.from({ length: 6 }, () => ["", "", "", "", ""]),
          colorsArray: Array.from({ length: 6 }, () => ["", "", "", "", ""]),
          colorsMap: new Map<string, string>(),
          currentInput: { row: 0, col: 0 },
          showWelcome: false,
          showWin: false,
          showLost: false,
          wordOfGame: null
        });
      }
    }, [gameState.showWin, gameState.showLost]);

    const getNewWordToGame = async(): Promise<void>  => {
      const wordObject = await getWordOfGame();
      gameState.wordOfGame = wordObject;
      const newGameState = Object.create(gameState);
      setGameState(newGameState);
    };

    const addToCurrentInput = ():void => {
       if(gameState.currentInput.col <= 4) { 
          gameState.currentInput = {row: gameState.currentInput.row, col: gameState.currentInput.col + 1};
          const newGameState = Object.create(gameState);
          setGameState(newGameState);
        } 
        if (gameState.currentInput.col > 4) {
          gameState.currentInput = {row: gameState.currentInput.row+1, col: 0};
          const newGameState = Object.create(gameState);
          setGameState(newGameState);
        }
    };
  
    const addLetterToBoard = (key: string):void => {
      const newBoardArray = gameState.boardArray.map((boardRow, rowIndex) => {
        const newLine = boardRow.map((value, colIndex) => {
          if(gameState.currentInput.row === rowIndex && gameState.currentInput.col === colIndex) {
              return key.toUpperCase();
          } 
          else return value;
        })
        return newLine;
      })
      gameState.boardArray = newBoardArray;
      const newGameState = Object.create(gameState);
      setGameState(newGameState);
    };
  
    const decreaseCurrentInput = (): void => {
      if(gameState.currentInput.col === 0) {
       return;
      }
      else {
          gameState.currentInput ={row: gameState.currentInput.row, col: gameState.currentInput.col-1};
          const newGameState = Object.create(gameState);
          setGameState(newGameState);
      }
    };
  
    const removeLetterFromBoard = (): void  => {
      const newBoardArray = gameState.boardArray.map((boardRow, rowIndex) => {
        const newLine = boardRow.map((value, colIndex) => {
          if(gameState.currentInput.row === rowIndex && gameState.currentInput.col-1 === colIndex) {
              return "";
          } 
          else return value;
        })
        return newLine;
      })
      gameState.boardArray = newBoardArray;
      const newGameState = Object.create(gameState);
      setGameState(newGameState);
    };
  
    const handleKeyUp = (key:string):void => {
      if(!gameState.showLost && !gameState.showWin && !gameState.showWelcome) {
        if (key === "Backspace" || key === "Del") {
          removeLetterFromBoard();
          decreaseCurrentInput();
          return;
        }
        if (/[a-zA-Z]/.test(key) && key.length === 1) {
          addLetterToBoard(key);
          addToCurrentInput();
          return;
        }
      }
    }; 

    const checkWord = async (): Promise<void> => {
      const wordToCheck = gameState.boardArray[gameState.currentInput.row-1].join('');
      const newColorsLineOfWord = await compareWords(wordToCheck, gameState.wordOfGame)
      .catch((err) => alert("Networking Error! Please try again!"));
      const newColorsArray = gameState.colorsArray.map((line, lineIdx) => {
        if(lineIdx === gameState.currentInput.row-1) {
          return newColorsLineOfWord ;
        }
        else return line;
      }) as unknown as string[][];
      gameState.colorsArray = newColorsArray;
      const newGameState = Object.create(gameState);
      setGameState(newGameState);
    };

    const chganeClassNameByColor = (color: string, writtenLetterClassName: string) =>  {
      switch(color) {
          case 'green':
            return `${writtenLetterClassName} green`;
          case 'yellow':
            return `${writtenLetterClassName} yellow`;
          case 'grey':
              return `${writtenLetterClassName} grey`;
          default:
            return writtenLetterClassName;
        }
    };

    const updateColorsMap = () => {
      for(let colIdx = 0; colIdx < 5; colIdx++) {
        const letter = gameState.boardArray[gameState.currentInput.row-1][colIdx];
        const color = gameState.colorsArray[gameState.currentInput.row-1][colIdx];
        if(gameState.colorsMap.get(letter) !== 'yellow' && gameState.colorsMap.get(letter) !== 'green') {
          gameState.colorsMap.set(letter,color);
        }
        if(color === 'green') {
          gameState.colorsMap.set(letter,'green');
        }
      }
      const newColorsMap = new Map<string, string>();
      for (let entry of Array.from(gameState.colorsMap.entries())) {
        let key = entry[0];
        let value = entry[1];
        newColorsMap.set(key,value);
      }
      gameState.colorsMap = newColorsMap;
      const newGameState = Object.create(gameState);
      setGameState(newGameState);
    };

    const checkWinOrLost = (): boolean => {
      for(let colIdx = 0; colIdx < 5; colIdx++) {
        if (gameState.colorsArray[gameState.currentInput.row-1][colIdx] !== "green") {
          return false;
        }
      }
      return true;
    }; 

    return {gameState, setGameState, handleKeyUp, chganeClassNameByColor};
}