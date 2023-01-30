import { CryptoService } from '../services/CryptoService';
import * as chai from 'chai';

const expect = chai.expect;

describe('cryptoService', () => {
  let cryptoInstance: CryptoService;

  beforeEach(() => {
    cryptoInstance = new CryptoService();
  });

  describe('encrypt', () => {
    it('should encrypt a word', () => {
      const word = 'test';
      const encrypted = cryptoInstance.encrypt(word);
      expect(encrypted).to.have.property('iv');
      expect(encrypted).to.have.property('encryptedWord');
      expect(encrypted).to.have.property('key');
    });
  });

  describe('decrypt', () => {
    it('should decrypt an encrypted word', () => {
      const word = 'test';
      const encrypted = cryptoInstance.encrypt(word);
      const decrypted = cryptoInstance.decrypt(encrypted.encryptedWord, encrypted.key, encrypted.iv);
      expect(decrypted).to.be.equal('test');
    });
  });
});
