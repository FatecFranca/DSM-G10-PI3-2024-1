import { model, Schema } from 'mongoose';

const manufacturerSchema = new Schema({
  name: String,
});

export const Manufacturer = model('Manufacturer', manufacturerSchema);
