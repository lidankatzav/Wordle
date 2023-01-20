import { expect } from 'chai';
import { WordsService } from '../services/WordsService';

describe('WordsService', () => {

    let wordsService: WordsService;

    beforeEach(() => {
        wordsService = new WordsService();
    });

    it('getRandomNumber should return a number', () => {
        const number = wordsService.getRandomNumber();
        expect(number).to.be.a('number');
    });

    it('getRandomWord should return a word of 5-letters', () => {
        const word = wordsService.getRandomWord();
        expect(word).to.be.a('string');
        expect(word).to.be.lengthOf(5);
    });

    it('setRandomWord should change the current random word', () => {
        const originalWord = wordsService.getRandomWord();
        wordsService.setRandomWord();
        const newWord = wordsService.getRandomWord();
        expect(originalWord).to.not.equal(newWord);
    });
});
