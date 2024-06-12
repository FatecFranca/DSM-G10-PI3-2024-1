import { model, Schema } from 'mongoose';

const schedulingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  vaccine: { type: Schema.Types.ObjectId, ref: 'Vaccine' },
  date: Date,
  location: String,
});

export const Scheduling = model('Scheduling', schedulingSchema);
