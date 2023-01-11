import React, { useEffect, useRef, useState } from "react";

export function useGame() {

    let numberOfTries = 6;
    const [boardArray, setBoardArray] = useState(Array.from({length: numberOfTries}, () => ["","","","",""]));
    const [colorsArray, setColorsArray] = useState(Array.from({length: numberOfTries}, () => ["","","","",""]));
    const [colorsMap, setColorsMap] = useState(new Map<string,string>());
    const [currentInput, setCurrentInput] =  useState({row: 0, col: 0});
    const [showWinPopup, setShowWinPopup] = useState(false);
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
          console.log("win");
        }
        else if(!result && currentInput.row === numberOfTries) {
          console.log("end");
        }
        updateColorsMap();
      }
    }, [colorsArray]);

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
      if(currentInput.col <= 4) {
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
        if(colorsMap.get(letter) !== 'green') {
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
        if (colorsArray[currentInput.row-1][colIdx] != "green") {
          return false;
        }
      }
      return true;
    }  

    return {
      boardArray, currentInput, handleKeyUp, 
      colorsArray, chganeClassNameByColor, colorsMap
    };
}