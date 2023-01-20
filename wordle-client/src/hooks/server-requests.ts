import React from "react";

const URL: string = 'http://localhost:9000';

export async function getRandomWord() {
    const response: Response = await fetch(`${URL}/random-word`);
    const randomWord: string  = await response.json();
    console.log(randomWord);
    return randomWord;
}

