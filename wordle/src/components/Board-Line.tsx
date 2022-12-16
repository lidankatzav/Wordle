import React from "react";

export function BoardLine(): JSX.Element {
    return (
        <div className="line">
                <input className="board-letter input-group form-control bg-light"></input>
                <input className="board-letter input-group form-control bg-light"></input>
                <input className="board-letter input-group form-control bg-light"></input>
                <input className="board-letter input-group form-control bg-light"></input>
                <input className="board-letter input-group form-control bg-light"></input>
        </div>
    );
}