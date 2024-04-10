import { model, Schema } from 'mongoose';

const vaccineSchema = new Schema({
  name: String,
  manufacturer: String,
});

export const Vaccine = model('Vaccine', vaccineSchema);
