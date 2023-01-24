
import { GamePopup } from "./Game-Popup";
import { UserContext } from "../../providers/UserContext";
import { BoardContext } from "../../providers/BoardContext";
import React, { useContext } from "react";


export function WinPopup() {

    const {user} = useContext(UserContext);
    const {gameState, setGameState} = useContext(BoardContext);

    const userBody = `${user[0]}, you won the game!`
    
    return (
        <GamePopup title = 'Congratulations' body = {userBody} showPopup={gameState.showWin} gameState = {gameState} setGameState  = {setGameState} typeModal = 'win'/>
    );
}
