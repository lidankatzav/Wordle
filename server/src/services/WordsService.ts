import { WordsDao } from "../dao/WordsDao";

export class WordsService {

    private wordsDao: WordsDao;
    private randomWord: string;

    constructor() {
        this.wordsDao = new WordsDao();
        this.randomWord = this.newRandomWord();
    }

    getRandomNumber(): number {
        return Math.floor(Math.random() * this.wordsDao.getLengthOfWordsList());
    }

    newRandomWord(): string {
        return this.wordsDao.getWordByIndex(this.getRandomNumber());
    }

    getRandomWord(): string {
        return this.randomWord;
    }

    setRandomWord(): void {
        this.randomWord = this.newRandomWord();
    }
}

// const w1 = new WordsService();
// console.log(w1.getRandomNumber());
// console.log(w1.getRandomWord());
// console.log(w1.setRandomWord());
// console.log(w1.getRandomWord());