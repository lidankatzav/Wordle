import React, { useContext } from "react";
import '../css/game-board.css';
import {BoardLine} from "./Board-Line";
import {BoardContext} from "../providers/BoardContext";

export function BoardGame(): JSX.Element {

    const {boardArray} = useContext(BoardContext);

    return (
        <>
        <div className="board">
            {boardArray.map((line: string[], index:number) => 
                <BoardLine line={line} indexLine = {index} key={index}/>)}
        </div>
        </>
    );
}
