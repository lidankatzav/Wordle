import React, {useState} from "react";
import {Topbar} from "../components/Topbar";
import {BoardGame} from "../components/Board-Game";
import {Keyboard} from "../components/Keyboard";
import {InfoPopup} from "../components/Popups/Info-Popup";
import { ProfilePopup } from "../components/Popups/Profile-Popup";
import {BoardContext} from "../providers/BoardContext";
import {TopbarContext} from "../providers/TopbarContext";
import {useGame} from "../hooks/useGame";
import { WinPopup } from "../components/Popups/Win-Popup";
import { LostPopup } from "../components/Popups/Lost-Popup";

function Game(): JSX.Element {

  const {numberOfTries, boardArray, currentInput, handleKeyUp, 
    colorsArray, chganeClassNameByColor, colorsMap, showWin, setShowWin, 
    showLost, setShowLost} = useGame();
  const [showInfo, setShowInfo] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  return (
    <BoardContext.Provider value = { {numberOfTries, boardArray, currentInput, handleKeyUp, 
      colorsArray, chganeClassNameByColor, colorsMap, showWin, setShowWin, showLost, setShowLost} }>
    <TopbarContext.Provider value = {{showInfo, setShowInfo, showProfile, setShowProfile}}>
      <div onKeyUp = {(event) =>  handleKeyUp(event.key)} >
      <Topbar/>
      <InfoPopup/>
      <ProfilePopup/>
      <WinPopup/>
      <LostPopup/>
      <BoardGame/>
      <Keyboard/>
      </div>
    </TopbarContext.Provider>
    </BoardContext.Provider>
  );
}

export default Game;

