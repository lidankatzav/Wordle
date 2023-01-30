import { readFileSync } from 'fs';

export class WordsDao {
  private wordsList: string[];

  constructor() {
    this.wordsList = readFileSync('./src/resources/WordsList.txt').toString().split('\n');
  }

  getWordsList(): string[] {
    return this.wordsList;
  }

  getLengthOfWordsList(): number {
    return this.wordsList.length;
  }

  getWordByIndex(index: number): string {
    return this.wordsList[index];
  }
}
