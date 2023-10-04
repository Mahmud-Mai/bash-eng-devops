import { model, Schema } from "mongoose";

const unitSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Unit = new model("Unit", unitSchema);
export default Unit;
