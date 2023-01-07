import React, {useState} from "react";

import {Topbar} from "./components/Topbar";
import {BoardGame} from "./components/Board-Game";
import {Keyboard} from "./components/Keyboard";

import {BoardContext} from "./providers/BoardContext";
import {TopbarContext} from "./providers/TopbarContext";
import {InfoPopup} from "./components/Info-Popup";

import {useGame} from "./hooks/useGame";

function App(): JSX.Element {

  const {boardArray, setBoardArray, currentInput, setCurrentInput, handleKeyUp} = useGame();
  const [showInfo, setShowInfo] = useState(false);

  return (
    <BoardContext.Provider value = {{boardArray, setBoardArray, currentInput, setCurrentInput, handleKeyUp}}>
    <TopbarContext.Provider value = {{showInfo, setShowInfo}}>
      <div onKeyUp = {(event) =>  handleKeyUp(event.key)} >
      <Topbar/>
      <InfoPopup/>
      <BoardGame/>
      <Keyboard/>
      </div>
    </TopbarContext.Provider>
    </BoardContext.Provider>
  );
}

export default App;

