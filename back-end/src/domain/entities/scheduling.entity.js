import { model } from "mongoose";

const schedulingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  vaccine: { type: Schema.Types.ObjectId, ref: 'Vaccine' },
  date: Date,
});

export const Scheduling = model('Scheduling', schedulingSchema);
