import React, { useContext } from "react";
import { BoardContext } from "../providers/BoardContext";

export function KeyboradKey(props: { keyValue: string }):  JSX.Element {

    const {keyValue} = props;
    const {handleKeyUp} = useContext(BoardContext);

    return (
        <button className="keyboard-key input-group form-control bg-light" onClick = {() => handleKeyUp(keyValue)}>
            {keyValue}
        </button>
    );
}