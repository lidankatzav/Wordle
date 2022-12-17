import { useContext } from "react";
import {BoardContext} from "../providers/BoardContext";

export function BoardLine(props: {line: string[], indexLine: number}) {

    const {line, indexLine} = props;
    const {currentInput} = useContext(BoardContext);

    return(
        <div className="line">
            {line.map((key, colIndex) => {
                if (indexLine === currentInput.row && colIndex === currentInput.col) {
                    return <input className="board-letter form-control bg-light" autoFocus></input>;
                }
                else {
                    return <div className="board-letter bg-light">{key}</div>;
                }
            })}
        </div>
    );
}