import { expect } from 'chai';
import { WordsDao } from '../dao/WordsDao';

describe('WordsDao', () => {
    let wordsDao: WordsDao;

    beforeEach(() => {
        wordsDao = new WordsDao();
    });

    it('getWordsList should return an array of words', () => {
        const wordsList = wordsDao.getWordsList();
        expect(wordsList).to.be.an('array');
        expect(wordsList.length).to.be.greaterThan(0);
        expect(wordsList[0]).to.be.a('string');
    });

    it('getLengthOfWordsList should return the length of words list', () => {
        const length = wordsDao.getLengthOfWordsList();
        expect(length).to.be.a('number');
    });

    it('getWordByIndex should return a word of 5-letters at the specified index', () => {
        const index = 0;
        const word = wordsDao.getWordByIndex(index);
        expect(word).to.be.a('string');
        expect(word).to.be.lengthOf(5);
    });
});
