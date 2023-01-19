import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/', (req, res) => {
    res.send("hello");
});

app.listen(3010, '0.0.0.0', () => {
    console.log('Server is running');
});

