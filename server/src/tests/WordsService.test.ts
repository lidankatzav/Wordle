import { expect } from 'chai';
import { WordsService } from '../services/WordsService';

describe('WordsService', () => {
    let wordsService: WordsService;

    beforeEach(() => {
        wordsService = new WordsService();
    });

    describe('getRandomNumber()', () => {
        it('should return a random number', () => {
            const randomNumber = wordsService.getRandomNumber();
            expect(randomNumber).to.be.a('number');
        });
    });

    describe('newRandomWord()', () => {
        it('should return a random word of 5-letters', () => {
            const randomWord = wordsService.newRandomWord();
            expect(randomWord).to.be.a('string');
            expect(randomWord).to.be.lengthOf(5);
        });
    });

    describe('getRandomWord()', () => {
        it('should return the current random word', () => {
            const randomWord = wordsService.getRandomWord();
            expect(randomWord).to.be.a('string');
            expect(randomWord).to.be.lengthOf(5);
        });
    });

    describe('setRandomWord()', () => {
        it('should set a new random word', () => {
            const oldRandomWord = wordsService.getRandomWord();
            wordsService.setRandomWord();
            const newRandomWord = wordsService.getRandomWord();
            expect(oldRandomWord).to.not.equal(newRandomWord);
        });
    });

    describe('compareWord(word: string)', () => {
        it('should return an array of grey colors when the word is not correct', () => {
            wordsService.randomWord = 'bbbbb';
            const result = wordsService.compareWord('aaaaa');
            expect(result).to.eql(Array(5).fill('grey'));
        });

        it('should return an array of green colors when the word is correct', () => {
            const result = wordsService.compareWord(wordsService.getRandomWord());
            expect(result).to.eql(Array(5).fill('green'));
        });

        it('should return an array of yellow, green and grey colors when the word is partially correct', () => {
            wordsService.randomWord = 'hello';
            const result = wordsService.compareWord('whelp');
            expect(result).to.eql(['grey', 'yellow', 'yellow', 'green', 'grey']);
        });

        it('should return an array of yellow and grey colors when the word is partially correct', () => {
            wordsService.randomWord = 'hello';
            const result = wordsService.compareWord('ahhhh');
            expect(result).to.eql(['grey', 'yellow', 'grey', 'grey', 'grey']);
        });
    });
});
