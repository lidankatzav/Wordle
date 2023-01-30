import React, { useContext, useState } from 'react';
import { Topbar } from '../components/Topbar';
import { BoardGame } from '../components/Board-Game';
import { Keyboard } from '../components/Keyboard';
import { InfoPopup } from '../components/Popups/Info-Popup';
import { ProfilePopup } from '../components/Popups/Profile-Popup';
import { BoardContext } from '../providers/BoardContext';
import { TopbarContext } from '../providers/TopbarContext';
import { useGame } from '../hooks/useGame';
import { WinPopup } from '../components/Popups/Win-Popup';
import { LostPopup } from '../components/Popups/Lost-Popup';

function Game(): JSX.Element {
  const { gameState, setGameState, handleKeyUp, chganeClassNameByColor } = useGame();
  const [topbarPopus, setTopbarPopus] = useState({
    showInfo: false,
    showProfile: false,
  });

  const handleKeyUpOnBoard = (event: React.KeyboardEvent) => {
    if (!topbarPopus.showInfo && !topbarPopus.showProfile) {
      handleKeyUp(event.key);
    }
  };

  return (
    <BoardContext.Provider value={{ gameState, setGameState, handleKeyUp, chganeClassNameByColor }}>
      <TopbarContext.Provider value={{ topbarPopus, setTopbarPopus }}>
        <div onKeyUp={(event) => handleKeyUpOnBoard(event)}>
          <Topbar />
          <InfoPopup />
          <ProfilePopup />
          <WinPopup />
          <LostPopup />
          <BoardGame />
          <Keyboard />
        </div>
      </TopbarContext.Provider>
    </BoardContext.Provider>
  );
}

export default Game;
