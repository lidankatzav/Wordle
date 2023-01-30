import React, { useContext } from 'react';
import { BoardContext } from '../providers/BoardContext';

export function KeyboradKey(props: { keyValue: string }): JSX.Element {
  const { keyValue } = props;
  const { handleKeyUp, gameState, chganeClassNameByColor } = useContext(BoardContext);
  const keyClassName = chganeClassNameByColor(gameState.colorsMap.get(keyValue.toUpperCase()), 'keyboard-key input-group form-control');

  return (
    <button className={keyClassName} onClick={() => handleKeyUp(keyValue)}>
      {keyValue}
    </button>
  );
}
