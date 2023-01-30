import React, { useContext } from 'react';
import { GamePopup } from './Game-Popup';
import { UserContext } from '../../providers/UserContext';
import { BoardContext } from '../../providers/BoardContext';

export function LostPopup() {
  const { user } = useContext(UserContext);
  const { gameState, setGameState } = useContext(BoardContext);

  const userBody = `${user[0]}, you lost the game!`;

  return <GamePopup title="Ohhh.... Sorry" body={userBody} showPopup={gameState.showLost} gameState={gameState} setGameState={setGameState} typeModal="lost" />;
}
