import { Request, Response } from 'express';
import {WordsService} from '../services/WordsService';
import {CryptoService} from '../services/CryptoService';
export class WordsController {

    private wordsService: WordsService;
    private cryptoService: CryptoService;

    constructor() {
        this.wordsService = new WordsService();
        this.cryptoService = new CryptoService();
    }

    getRandomWord(req: Request, res: Response) {
        const randomWord = this.wordsService.getRandomWord();
        const encryptWord = this.cryptoService.encrypt(randomWord);
        res.json(encryptWord);
    }    

    compareWords(req: Request, res: Response) {
        const {encryptedWord, key, iv} = req.body.wordOfGame;
        const wordOfGame: string = this.cryptoService.decrypt(encryptedWord, key, iv);
        const wordOfClient: string = req.body.wordOfClient;
        const arrayResult = this.wordsService.compareWords(wordOfClient, wordOfGame);
        res.json(arrayResult);
    }

}