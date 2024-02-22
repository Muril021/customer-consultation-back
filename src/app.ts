import express from 'express';
import cors from 'cors';
import { env } from '../env';
import router from './routes';
import { MyDataSource } from './data-source';

const app = express();

const allowedOrigins = ['http://localhost:5173'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());

MyDataSource.initialize()
  .then(() => {
    app.listen(env.APP_PORT, () => {
      console.log(`Server running in port ${env.APP_PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);    
  })

app.use('/', router);