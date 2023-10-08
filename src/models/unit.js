import { model, models, Schema } from "mongoose";

const unitSchema = new Schema({
  name: {
    type: String,
    required: "Please provide the name of the unit",
    trim: true,
  },
});

const Unit = models.Unit || new model("Unit", unitSchema);
export default Unit;
