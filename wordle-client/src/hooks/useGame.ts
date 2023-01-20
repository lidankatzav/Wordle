import React, { useEffect, useState } from "react";

// import { getRandomWord } from "./server-requests";

// const mockWord = await getRandomWord();


export function useGame() {

    const [numberOfTries, setNumberOfTries] = useState(5);
    const [boardArray, setBoardArray] = useState(Array.from({length: numberOfTries}, () => ["","","","",""]));
    const [colorsArray, setColorsArray] = useState(Array.from({length: numberOfTries}, () => ["","","","",""]));
    const [colorsMap, setColorsMap] = useState(new Map<string,string>());
    const [currentInput, setCurrentInput] =  useState({row: 0, col: 0});
    const [showWelcome, setShowWelcome] = useState(false);
    const [showWin, setShowWin] = useState(false);
    const [showLost, setShowLost] = useState(false);
    const mockWord = "HELLO";

    useEffect(() => {
      if (currentInput.col === 0 && currentInput.row >= 1) {
        checkWord();
      }
    }, [currentInput]);

    useEffect(() => {
      if(currentInput.row >= 1) {
        const result = checkWinOrLost(currentInput.row-1);
        if(result) {
          setShowWin(true);
        }
        else if(!result && currentInput.row === numberOfTries) {
          setShowLost(true);
        }
        updateColorsMap();
      }
    }, [colorsArray]);

    useEffect(() => {
      if(showWin === false && currentInput.row >= 1) {
        resetGame();
      }
    }, [showWin, showLost]);
    
    const resetGame = () => {
        setCurrentInput({row: 0, col: 0});
        setBoardArray(Array.from({length: numberOfTries}, () => ["","","","",""]));
        setColorsArray(Array.from({length: numberOfTries}, () => ["","","","",""]));
        setColorsMap (new Map<string,string>());
    };

    const addToCurrentInput = ():void => {
       if(currentInput.col < 4) {
          setCurrentInput({row: currentInput.row, col: currentInput.col + 1});
        } 
        if (currentInput.col === 4) {
          setCurrentInput({row: currentInput.row+1, col: 0});
        }
    };
  
    const addLetterToBoard = (key: string):void => {
      const newBoardArray = boardArray.map((boardRow, rowIndex) => {
        const newLine = boardRow.map((value, colIndex) => {
          if(currentInput.row === rowIndex && currentInput.col === colIndex) {
              return key.toUpperCase();
          } 
          else return value;
        })
        return newLine;
      })
      setBoardArray(newBoardArray);
    };
  
    const decreaseCurrentInput = (): void => {
      if(currentInput.col === 0) {
       return;
      }
      else {
        setCurrentInput({row: currentInput.row, col: currentInput.col-1});
      }
    }
  
    const removeLetterFromBoard = (): void  => {
      const newBoardArray = boardArray.map((boardRow, rowIndex) => {
        const newLine = boardRow.map((value, colIndex) => {
          if(currentInput.row === rowIndex && currentInput.col-1 === colIndex) {
              return "";
          } 
          else return value;
        })
        return newLine;
      })
      setBoardArray(newBoardArray);
    }
  
    const handleKeyUp = (key:string):void => {
      if(!showLost && !showWin) {
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
    }   

    const checkWord = ():void  => {
      const wordToCheck = boardArray[currentInput.row-1].join('');
      const newColorsArray = colorsArray.map((line, lineIdx) => {
        if(lineIdx === currentInput.row-1) {
          const newLine = colorsArray[lineIdx].map( (value, letterIdx) => {
            if(wordToCheck[letterIdx] === mockWord[letterIdx]) {
              return "green";
            }
            else if(mockWord.includes(wordToCheck[letterIdx])) {
              return "yellow";
            }
            else return "grey";
          })
          return newLine;
        }
        else return line;
      });
      setColorsArray(newColorsArray);
    }

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
    }

    const updateColorsMap = () => {
      for(let colIdx = 0; colIdx < 5; colIdx++) {
        const letter = boardArray[currentInput.row-1][colIdx];
        const color = colorsArray[currentInput.row-1][colIdx];
        if(colorsMap.get(letter) !== 'green' &&  colorsMap.get(letter) !== 'yellow') {
          colorsMap.set(letter,color);
        }
      }
      const newColorsMap = new Map<string, string>();
      for (let entry of Array.from(colorsMap.entries())) {
        let key = entry[0];
        let value = entry[1];
        newColorsMap.set(key,value);
      }
      setColorsMap(newColorsMap);
    };

    const checkWinOrLost = (indexLine: number): boolean => {
      for(let colIdx = 0; colIdx < 5; colIdx++) {
        if (colorsArray[currentInput.row-1][colIdx] !== "green") {
          return false;
        }
      }
      return true;
    }  

    return {numberOfTries, boardArray, currentInput, handleKeyUp, 
    colorsArray, chganeClassNameByColor, colorsMap,
    showWin, setShowWin, showWelcome, setShowWelcome, 
    showLost, setShowLost};
    
}