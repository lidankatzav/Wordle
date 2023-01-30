import React from 'react';
import '../css/keyboard.css';
import { KeyboradKey } from './KeyboardKey';

export function Keyboard(): JSX.Element {
  const keyboardLayout: string[][] = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Del'],
  ];

  return (
    <>
      <br />
      <div className="keyboard">
        {keyboardLayout.map((line) => (
          <div className="keyboard-line" key={line[0]}>
            {line.map((key) => (
              <KeyboradKey keyValue={key} key={key} />
            ))}
          </div>
        ))}
      </div>
      <br />
    </>
  );
}
