import { WordsDao } from "../dao/WordsDao";

export class WordsService {

    private wordsDao: WordsDao;
    public randomWord: string;

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
        const prevWord = this.randomWord;
        this.setRandomWord();
        return prevWord;
    }

    setRandomWord(): void {
        this.randomWord = this.newRandomWord();
    }
    
    compareWords(wordOfClient: string, wordOfGame: string): string[] {
        const wordGame = wordOfGame.toLowerCase();
        const wordClient = wordOfClient.toLowerCase();
        if(wordGame === wordClient) {
            return Array(5).fill('green');
        }
        else {
            const arrayResult = Array(5);
            const lettersMap = new Map<string, number>();
            for(let idx = 0; idx<5; idx++) {
                const letter = wordClient[idx];
                const countLetter = wordGame.split('').reduce((acc, val) => val === letter ? acc + 1 : acc, 0);;
                if(countLetter === 0) {
                    arrayResult[idx] = 'grey';
                    continue;
                }
                if(lettersMap.get(letter) === undefined) {
                    lettersMap.set(letter, 1);
                }
                else {
                    lettersMap.set(letter, lettersMap.get(letter)+1);
                }
                if(lettersMap.get(letter) > countLetter) {
                    arrayResult[idx] = 'grey';
                    continue;
                }
                if(wordGame[idx] === wordClient[idx]) {
                    arrayResult[idx] = 'green';
                    continue;
                }
                arrayResult[idx] = 'yellow';
            }
            return arrayResult;
        }
    }
}
