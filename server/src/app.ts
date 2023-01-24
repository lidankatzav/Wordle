    import express , { Express, Request, Response } from 'express';
    import cors from 'cors';
    import { WordsController } from './controllers/WordsContoller';

    const app: Express = express();
    const port: number = 9020;

    app.use(express.json());
    app.use(cors());

    const wordsController = new WordsController();

    app.get('/random-word', (req: Request, res: Response) => {
        wordsController.getRandomWord(req, res);
    });

    app.post('/compare-words', (req: Request, res: Response) => {
        wordsController.compareWords(req, res);
    });

    app.listen(port, '0.0.0.0', () => {
        console.log(`Server is running in port ${port}`);
    });

