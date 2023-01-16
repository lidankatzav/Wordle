
import { GamePopup } from "./Game-Popup";
import { UserContext } from "../../providers/UserContext";
import { BoardContext } from "../../providers/BoardContext";
import { useContext } from "react";


export function WinPopup() {

    const {user} = useContext(UserContext);
    const {showWin, setShowWin} = useContext(BoardContext);

    const userBody = `${user[0]}, you won the game!`
    
    return (
        <GamePopup title = 'Congratulations' body = {userBody} showPopup={showWin} setShowFunc = {setShowWin}/>
    );
}
