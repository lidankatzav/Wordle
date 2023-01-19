import { readFileSync } from 'fs';

export class WordsDao {

    private wordsList: string[];

    constructor() {
        this.wordsList = readFileSync('./src/data/WordsList.txt').toString().split("\n");
    }

    getWordsList(): string[] {
        return this.wordsList;
    }

    getLengthOfWordsList(): number {
        return this.wordsList.length;
    }

    getWordByIndex(index: number): string | number {
        if(index >= this.getLengthOfWordsList() || index < 0 ) {
            return -1;
        }
        return this.wordsList[index];
    }
};
