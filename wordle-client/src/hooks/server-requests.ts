import React from "react";

const URL: string = 'http://localhost:9000';

export async function getWord() {
    const response: Response = await fetch(`${URL}/random-word`);
    const word: string  = await response.json();
    return word;
}

