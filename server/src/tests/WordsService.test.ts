import { expect } from 'chai';
import { WordsService } from '../services/WordsService';
import { WordsDao } from '../dao/WordsDao';

const wordsService = new WordsService();
const wordsDao = new WordsDao();

describe('WordsService', () => {
 
  it('should return a random number', (done) => {
    const randomNumber = wordsService.getRandomNumber();
    expect(randomNumber).to.be.a('number');
    expect(randomNumber).to.be.above(-1);
    expect(randomNumber).to.be.below(wordsDao.getLengthOfWordsList());
    done();
  });

  it('should return a random word', (done) => {
    const randomWord = wordsService.newRandomWord();
    expect(randomWord).to.be.a('string');
    expect(wordsDao.getWordsList()).to.include(randomWord);
    done();
  });

  it('should return the previous random word', (done) => {
    const prevWord = wordsService.getRandomWord();
    expect(prevWord).be.a('string');
    expect(wordsDao.getWordsList()).to.include(prevWord);
    done();
  });

  it('should compare two words and return an array of grey colors', (done) => {
    const word1 = 'tests';
    const word2 = 'world';
    const comparisonResult = wordsService.compareWords(word1, word2);
    expect(comparisonResult).to.be.a('array');
    expect(comparisonResult).to.have.lengthOf(5);
    expect(comparisonResult).to.eql(Array(5).fill('grey'));
    done();
  });

  it('should compare two equal words and return an array of green colors', (done) => {
    const word1 = 'hello';
    const word2 = 'hello';
    const comparisonResult = wordsService.compareWords(word1, word2);
    expect(comparisonResult).to.be.a('array');
    expect(comparisonResult).to.have.lengthOf(5);
    expect(comparisonResult).to.eql(Array(5).fill('green'));
    done();
  });

  it('should compare two words and return an array of some colors', (done) => {
    const word1 = 'whelp';
    const word2 = 'hello';
    const comparisonResult = wordsService.compareWords(word1, word2);
    expect(comparisonResult).to.be.a('array');
    expect(comparisonResult).to.lengthOf(5);
    expect(comparisonResult).to.eql(['grey', 'yellow', 'yellow', 'green', 'grey']);
    done();
  });
});
