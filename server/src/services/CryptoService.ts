import crypto from 'crypto';

export class CryptoService {
  encrypt(word: string) {
    const algorithm = 'aes-256-cbc';
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encryptedWord = cipher.update(word, 'utf8', 'hex');
    encryptedWord += cipher.final('hex');

    return {
      iv: iv.toString('hex'),
      encryptedWord: encryptedWord,
      key: key.toString('hex'),
    };
  }

  decrypt(encryptedWord: any, keyFromClient: any, ivFromClient: any) {
    const algorithm = 'aes-256-cbc';
    const key = Buffer.from(keyFromClient, 'hex');
    const iv = Buffer.from(ivFromClient, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decryptedWord = decipher.update(encryptedWord, 'hex', 'utf8');
    decryptedWord += decipher.final('utf8');
    return decryptedWord;
  }
}
