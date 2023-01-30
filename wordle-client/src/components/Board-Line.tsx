import React, { useContext } from 'react';
import { BoardContext } from '../providers/BoardContext';

export function BoardLine(props: { line: string[]; indexLine: number }) {
  const { line, indexLine } = props;
  const { gameState, chganeClassNameByColor } = useContext(BoardContext);

  return (
    <div className="line">
      {line.map((key, colIndex) => {
        if (indexLine === gameState.currentInput.row && colIndex === gameState.currentInput.col) {
          return <input className="board-letter form-control" type="text" value="" autoFocus={true} key={colIndex} readOnly></input>;
        } else if (key) {
          const keyClassName = chganeClassNameByColor(gameState.colorsArray[indexLine][colIndex], 'board-letter written-letter');
          return (
            <div className={keyClassName} key={colIndex}>
              {key}{' '}
            </div>
          );
        } else {
          return <div className="board-letter" key={colIndex}></div>;
        }
      })}
    </div>
  );
}
