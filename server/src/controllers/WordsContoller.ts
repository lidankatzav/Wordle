import express, { Express, Request, Response } from 'express';
import {WordsService} from '../services/WordsService';
export class WordsController {

    private wordsService: WordsService;

    constructor() {
        this.wordsService = new WordsService();
    }

    getRandomWord(req: Request, res: Response) {
        const randomWord = this.wordsService.getRandomWord();
        res.send(randomWord);
    }    

    setNewRandomWord(req: Request, res: Response) {
        this.wordsService.setRandomWord();
        const newRandomWord = this.wordsService.getRandomWord();
        res.send(newRandomWord);
    }

    checkWord(req: Request, res: Response) {
        const arrayResult = this.wordsService.compareWord(req.body.word);
        res.send(arrayResult);
    }
}