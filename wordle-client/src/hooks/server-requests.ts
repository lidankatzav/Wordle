import React from "react";

const URL: string = 'http://localhost:9020';

export async function getWordOfGame() {
    const response: Response = await fetch(`${URL}/random-word`);
    const word: string  = await response.json();
    return word;
}

export async function compareWord(wordToCheck: string) {
    const response: Response = await fetch(`${URL}/compare-word`, {
        method: 'POST',
        body: JSON.stringify({word: wordToCheck}),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    const colorsArrayResult: string[] = await response.json();
    return colorsArrayResult;
}
