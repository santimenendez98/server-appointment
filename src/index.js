import app from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const port = process.env.PORT || 4000;

dotenv.config();

mongoose
 .connect(process.env.DB_URL, { maxPoolSize: process.env.MONGO_POOLSIZE || 1 })
 .then(() => console.log('Connection success'))
 .then(() => {
  app.listen(port, () => {
    console.log(`This app listening on port ${port}`)
  })
 })
 .catch((e) => console.log('Error: ', e))