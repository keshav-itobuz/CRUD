import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()
const URL = process.env.URL;
mongoose.connect(URL);

const { Schema } = mongoose;


const userSchema = new Schema({
  name: String, 
  email: String,
  password : String,

});

export const User = mongoose.model('User', userSchema);