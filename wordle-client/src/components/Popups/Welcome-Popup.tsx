import { GamePopup } from "./Game-Popup";
import { UserContext } from "../../providers/UserContext";
import { PopupsContext } from "../../providers/PopupsContext";
import React, { useContext } from "react";


export function WelcomePopup() {

    const {user} = useContext(UserContext);
    const {gameState, setGameState} = useContext(PopupsContext);

    const userBody: string = `Hey ${user[0]}, let׳s play!`;

    return (
        <GamePopup title = 'Welcome Back' body = {userBody} showPopup={gameState.showWelcome} gameState = {gameState} setGameState  = {setGameState} typeModal = 'welcome'/>
    );
}