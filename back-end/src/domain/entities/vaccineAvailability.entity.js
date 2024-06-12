import { model, Schema } from 'mongoose';
const vaccineAvailabilitySchema = new Schema({
  vaccine: { type: Schema.Types.ObjectId, ref: 'Vaccine', unique: true },
  availableDates: [Date],
  location: String,
  availableDoses: Number,
});

export const VaccineAvailability = model(
  'VaccineAvailability',
  vaccineAvailabilitySchema
);
