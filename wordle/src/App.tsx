import React, { useState } from "react";

import {Topbar} from "./components/Topbar";
import {Board} from "./components/Board";
import {Keyboard} from "./components/Keyboard";

import {BoardContext} from "./providers/BoardContext";
import {TopbarContext} from "./providers/TopbarContext";

function App(): JSX.Element {

  let numberOfTries = 5;
  const [boardArray, setBoardArray] = useState(Array.from({length: numberOfTries}, () => ["","","","",""]));
  const [currentInput, setCurrentInput] =  useState({row: 0, col: 0});
  const [isInfo, setIsInfo] = useState(false);

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


  return (
    <BoardContext.Provider value = {{boardArray, setBoardArray, currentInput, setCurrentInput, handleKeyUp}}>
    <TopbarContext.Provider value = {{isInfo, setIsInfo}}>
      <div onKeyUp = {(event) =>  handleKeyUp(event.key)} >
      <Topbar/>
      <Board/>
      <Keyboard/>
      </div>
    </TopbarContext.Provider>
    </BoardContext.Provider>
  );
}

export default App;
