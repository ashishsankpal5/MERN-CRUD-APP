import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use(cors());

//routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`.brightGreen.bgBlack)
);
