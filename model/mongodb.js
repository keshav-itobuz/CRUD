import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
},{timestamps:true});

const User = mongoose.model('users', userSchema);
export default User;
