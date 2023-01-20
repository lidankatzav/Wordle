import express , { Express, Request, Response } from 'express';
import cors from 'cors';
import { WordsController } from './controllers/WordsContoller';

const app: Express = express();
const port: number = 9000;

app.use(express.json());
app.use(cors());

const wordsController = new WordsController();

app.use('/random-word', (req: Request, res: Response) => {
    wordsController.sendRandomWord(req, res);
});

app.listen(port, '0.0.0.0', () => {
    console.log('Server is running');
});

