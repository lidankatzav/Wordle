import React from "react";
import "../css/keyboard.css";
import {KeyboradKey} from "./KeyboardKey";

export function Keyboard(): JSX.Element {

    const keyboardLayout: string[][] = [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['z','x','c','v','b','n','m','Delete']];

    return (
        <>
            <br/>
            <div className="keyboard">
                {keyboardLayout.map((line) => (
                    <div className = "keyboard-line">
                        {line.map((key) => 
                        <KeyboradKey keyValue = {key}/>
                        )}
                    </div>
                ))}
            </div>
            <br/>
        </>
    );
}