import { model, models, Schema } from "mongoose";

const locationSchema = new Schema({
  district: {
    type: String,
    required: "Please provide a district",
    trim: true,
  },
  state: {
    type: String,
    required: "Please provide a state",
    trim: true,
  },
});

const Location = models.Location || new model("Location", locationSchema);
export default Location;
