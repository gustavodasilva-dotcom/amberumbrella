import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import ConfigRoutes from './routes/config';
import Credentials from './middlewares/credentials';
import { corsOptions } from './config/cors/configOptions';
import ConnectDb from './database/config/mongoDb';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;

ConnectDb();

app.use(Credentials);

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(bodyParser.json());

ConfigRoutes(app);

mongoose.connection.once('open', async () => {
  console.log('Connected to MongoDB');
  
  app.listen(PORT, () => console.log(`Application running on port ${PORT}`));
});