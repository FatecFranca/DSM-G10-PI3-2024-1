const vaccineAvailabilitySchema = new Schema({
  vaccine: { type: Schema.Types.ObjectId, ref: 'Vaccine', unique: true },
  availableDates: [Date],
  availableDoses: Number,
});

export const VaccineAvailability = model(
  'VaccineAvailability',
  vaccineAvailabilitySchema
);
