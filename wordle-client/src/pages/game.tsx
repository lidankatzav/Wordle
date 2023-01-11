import React, {useState} from "react";

import {Topbar} from "../components/Topbar";
import {BoardGame} from "../components/Board-Game";
import {Keyboard} from "../components/Keyboard";
import {InfoPopup} from "../components/Info-Popup";

import {BoardContext} from "../providers/BoardContext";
import {TopbarContext} from "../providers/TopbarContext";

import {useGame} from "../hooks/useGame";
import { ProfilePopup } from "../components/Profile-Popup";

function Game(): JSX.Element {

  const {boardArray, currentInput, handleKeyUp, 
    colorsArray, chganeClassNameByColor, colorsMap} = useGame();
  const [showInfo, setShowInfo] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  return (
    <BoardContext.Provider value = { {boardArray, currentInput, handleKeyUp, 
      colorsArray, chganeClassNameByColor, colorsMap}}>
    <TopbarContext.Provider value = {{showInfo, setShowInfo, showProfile, setShowProfile}}>
      <div onKeyUp = {(event) =>  handleKeyUp(event.key)} >
      <Topbar/>
      <InfoPopup/>
      <ProfilePopup/>
      <BoardGame/>
      <Keyboard/>
      </div>
    </TopbarContext.Provider>
    </BoardContext.Provider>
  );
}

export default Game;

