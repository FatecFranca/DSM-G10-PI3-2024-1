import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ['ADMIN', 'APPLICATOR', 'SCHEDULER', 'PACIENT'],
  },
  cpf: { type: String, unique: true },
});

export const User = model('User', userSchema);
