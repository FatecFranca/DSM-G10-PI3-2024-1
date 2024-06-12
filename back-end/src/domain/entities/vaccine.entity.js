import { model, Schema } from 'mongoose';

const vaccineSchema = new Schema({
  name: String,
  manufacturer: { type: Schema.Types.ObjectId, ref: 'Manufacturer' },
});

export const Vaccine = model('Vaccine', vaccineSchema);
