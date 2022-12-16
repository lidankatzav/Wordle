import React from "react";
import '../css/board.css';
import {BoardLine} from "./Board-Line";

export function Board(): JSX.Element {

    const numberOfTries = 5; // props in future

    return (
        <>
        <br/>
        <div className="board">
            {Array.from({length: numberOfTries}, () => <BoardLine/>)}
        </div>
        </>
    );
}
