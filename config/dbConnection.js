import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const URL = process.env.URL;

export function dbConnection(){
    mongoose.connect(URL);
}