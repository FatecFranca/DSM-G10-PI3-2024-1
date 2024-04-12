import dotenv from 'dotenv';
// Carrega as variáveis do arquivo .env
// no objeto global process.env
dotenv.config();

import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';

const app = express();

import mongoose from 'mongoose';
mongoose.connect(process.env.DATABASE_URL);

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

export default app;
