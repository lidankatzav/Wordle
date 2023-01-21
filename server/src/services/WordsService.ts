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
        return this.randomWord;
    }

    setRandomWord(): void {
        this.randomWord = this.newRandomWord();
    }
    
    compareWord(word: string): string[] {

        const wordToCompare = word.toLowerCase();
        const wordOfGame = this.getRandomWord();
        // if(!this.wordsDao.getWordsList().includes(wordToCompare)) {
        //     return Array(5).fill('');
        // }
        if(wordOfGame === wordToCompare) {
            return Array(5).fill('green');
        }
        else {
            const arrayResult = Array(5);
            const lettersMap = new Map<string, number>();
            for(let idx = 0; idx<5; idx++) {
                const letter = wordToCompare[idx];
                const countLetter = wordOfGame.split('').reduce((acc, val) => val === letter ? acc + 1 : acc, 0);;
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
                if(wordOfGame[idx] === wordToCompare[idx]) {
                    arrayResult[idx] = 'green';
                    continue;
                }
                arrayResult[idx] = 'yellow';
            }
            return arrayResult;
        }
    }
}
