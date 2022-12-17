import { useEffect, useState } from "react";
import {Topbar} from "./components/Topbar";
import {Board} from "./components/Board";
import {Keyboard} from "./components/Keyboard";
import {BoardContext} from "./providers/BoardContext";

function App() {

  let numberOfTries = 5;
  const [boardArray, setBoardArray] = useState(Array.from({length: numberOfTries}, () => ["","","","",""]));
  const [currentInput, setCurrentInput] =  useState({row: 0, col: 0});

  useEffect(() => {
    if(currentInput.col < 4 && boardArray[0][0] !== "") {
      setCurrentInput({row: currentInput.row, col: currentInput.col + 1});
    } 
    else if (currentInput.col === 4) {
      setCurrentInput({row: currentInput.row+1, col: 0});
    }
  }, [boardArray]);

  let updateCurrentInput = (event: { key: string; }) => {
    const newBoardArray = boardArray.map((boardRow, rowIndex) => {
      const newLine = boardRow.map((value, colIndex) => {
        if(currentInput.row === rowIndex && currentInput.col === colIndex) return event.key;
        else return value;
      })
      return newLine;
    })
    setBoardArray(newBoardArray);
  };

  return (
    <>
    <BoardContext.Provider value = {{boardArray, setBoardArray, currentInput, setCurrentInput}}>
      <div onKeyUp = {updateCurrentInput} >
      <Topbar/>
      <Board/>
      <Keyboard/>
      </div>
    </BoardContext.Provider>
    </>
  );
}

export default App;
