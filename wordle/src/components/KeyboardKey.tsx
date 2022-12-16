import React from "react";

export function KeyboradKey(props: { keyValue: string }):  JSX.Element {

    const {keyValue} = props;
    
    return (
        <button className="keyboard-key input-group form-control bg-light">
            {keyValue}
        </button>
    );
}