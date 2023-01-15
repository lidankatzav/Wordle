import Game from "../../pages/game";
import { GamePopup } from "./Game-Popup";
import { UserContext } from "../../providers/UserContext";
import { PopupsContext } from "../../providers/PopupsContext";
import { useContext } from "react";


export function WelcomePopup() {

    const {user} = useContext(UserContext);
    const {showWelcome, setShowWelcome} = useContext(PopupsContext);

    const userBody: string = `Hey ${user[0]}, Let's Play!`;

    return (
        <GamePopup title = 'Welcome Back' body = {userBody} showPopup={showWelcome} setShowFunc = {setShowWelcome}/>
    );
}
