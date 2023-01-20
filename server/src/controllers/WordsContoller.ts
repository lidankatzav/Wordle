import express, { Express, Request, Response } from 'express';
import {WordsService} from '../services/WordsService';

export class WordsController {

    private wordsService: WordsService;

    constructor() {
        this.wordsService = new WordsService();
    }

    getRandomWord(req: Request, res: Response) {
        const randomWord = this.wordsService.getRandomWord();
        res.status(200).send(randomWord);
    }    
}