import { model, models, Schema } from "mongoose";

const locationSchema = new Schema({
  state: {
    type: String,
    required: "Please provide a state",
    trim: true,
  },
});

const Location = models.Location || new model("Location", locationSchema);
export default Location;

// district: {
//   type: String,
//   required: "Please provide a district",
//   trim: true,
// },
