import React, { useContext } from "react";
import '../css/board.css';
import {BoardLine} from "./Board-Line";
import {BoardContext} from "../providers/BoardContext";

export function Board(): JSX.Element {

    const {boardArray} = useContext(BoardContext);

    return (
        <>
        <br/>
        <div className="board">
            {boardArray.map((line: string[], index:number) => 
                <BoardLine line={line} indexLine = {index} key={index}/>)}
        </div>
        </>
    );
}
