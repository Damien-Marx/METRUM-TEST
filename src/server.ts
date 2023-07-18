import dotenv from 'dotenv';
import express from 'express';
import routes from './routes';

const app = express();

const port = process.env.PORT || 3000;
const url = process.env.URL || 'http://localhost';


app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Server lancé sur : ${url}:${port}`);
  });
dotenv.config();

