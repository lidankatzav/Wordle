import { expect } from 'chai';
import request from 'supertest';
import { WordsController } from '../controllers/WordsContoller';
import app from '../app';

describe('WordsController', () => {

  let wordsController: WordsController;

  beforeEach(() => {
    wordsController = new WordsController();
  });

  describe('getRandomWord', () => {
    it('should return an encrypted word', async () => {
      const res = await request(app).get('/random-word');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.a('object');
    });
  });

  describe('compareWords', () => {
    it('should return an array of colors', async () => {
      const encryptedWord = 'cf38c0718c538681aaeb65f42d7b1fe3';
      const key = 'cf41688202b389b55b310c966cad9e3904d9f27a7b31df5f9674c6f069773fdf';
      const iv = 'db3245b2662e92719238d184403c8a8f';
      const wordOfClient = 'hello';
      const res = await request(app)
        .post('/compare-words')
        .send({
          wordOfGame: {
            encryptedWord,
            key,
            iv,
          },
          wordOfClient,
        });
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.have.lengthOf(wordOfClient.length);
    });
  });
});
