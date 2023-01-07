import React, { useState } from "react";

export function useGame() {

    let numberOfTries = 5;
    const [boardArray, setBoardArray] = useState(Array.from({length: numberOfTries}, () => ["","","","",""]));
    const [currentInput, setCurrentInput] =  useState({row: 0, col: 0});

    const addToCurrentInput = ():void => {
        if(currentInput.col < 4) {
          setCurrentInput({row: currentInput.row, col: currentInput.col + 1});
        } 
        if (currentInput.col === 4) {
          setCurrentInput({row: currentInput.row+1, col: 0});
          alert("done");
        }
    }
  
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
        setCurrentInput({row: currentInput.row, col: currentInput.col});
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
        if (key === "Backspace" || key === "Delete") {
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

    return {
        boardArray, setBoardArray, currentInput, setCurrentInput,
        addToCurrentInput, addLetterToBoard, decreaseCurrentInput, 
        removeLetterFromBoard, handleKeyUp
    };
}