import React from 'react';

const URL: string = 'http://localhost:3333';

export async function getWordOfGame() {
  const response: Response = await fetch(`${URL}/random-word`);
  const wordObject: object = await response.json();
  return wordObject;
}

export async function compareWords(wordToCheck: string, wordOfGame: Object) {
  const response: Response = await fetch(`${URL}/compare-words`, {
    method: 'POST',
    body: JSON.stringify({ wordOfClient: wordToCheck, wordOfGame: wordOfGame }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const colorsArrayResult: string[] = await response.json();
  return colorsArrayResult;
}
