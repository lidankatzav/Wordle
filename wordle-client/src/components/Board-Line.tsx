import React, { useContext } from "react";
import {BoardContext} from "../providers/BoardContext";

export function BoardLine(props: {line: string[], indexLine: number}) {

    const {line, indexLine} = props;
    const {currentInput, colorsArray, chganeClassNameByColor} = useContext(BoardContext);

    return(
        <div className="line">
            {line.map((key, colIndex) => {
                if (indexLine === currentInput.row && colIndex === currentInput.col) {
                    return <input className="board-letter form-control" value="" autoFocus></input>;
                }
                else if(key) {
                    const keyClassName = chganeClassNameByColor(colorsArray[indexLine][colIndex], 'board-letter written-letter');
                    return <div className={keyClassName}>{key}</div>;
                }
                else {
                    return <div className="board-letter"></div>;
                }
            })}
        </div>
    );
}