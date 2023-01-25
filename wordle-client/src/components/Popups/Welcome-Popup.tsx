import { GamePopup } from "./Game-Popup";
import { UserContext } from "../../providers/UserContext";
import { PopupsContext } from "../../providers/PopupsContext";
import React, { useContext } from "react";


export function WelcomePopup() {

    const {user} = useContext(UserContext);
    const {gameState, setGameState} = useContext(PopupsContext);

    const userBody: string = `Hey ${user[0]}, do you want to start play?`;

    return (
        <GamePopup title = 'New Game' body = {userBody} showPopup={gameState.showWelcome} gameState = {gameState} setGameState  = {setGameState} typeModal = 'welcome'/>
    );
}