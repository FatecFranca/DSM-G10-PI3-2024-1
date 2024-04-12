import mongoose, { model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  cpf: { type: String, unique: true },
});

export const User = model('User', userSchema);
