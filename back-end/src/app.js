import dotenv from 'dotenv';
// Carrega as variáveis do arquivo .env
// no objeto global process.env
dotenv.config();
import guarded from './infra/middlewares/authMiddleware.js';
import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import userRouter from './routes/user.js';
import loginRouter from './routes/login.js';
import manufacturerRouter from './routes/manufacturer.js';
import vaccineRouter from './routes/vaccine.js';
import schedulingRouter from './routes/scheduling.js';
import vaccineAvailabilityRouter from './routes/vaccineAvailability.js';

const applyMiddleware = (middleware, pathsToExclude) => {
  return (req, res, next) => {
    if (pathsToExclude.includes(req.path)) {
      return next();
    }
    return middleware(req, res, next);
  };
};

const app = express();

import mongoose from 'mongoose';
mongoose.connect(process.env.DATABASE_URL);

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(applyMiddleware(guarded, ['/login']));
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/manufacturers', manufacturerRouter);
app.use('/vaccines', vaccineRouter);
app.use('/vaccines/availability', vaccineAvailabilityRouter);
app.use('/schedules', schedulingRouter);

export default app;
