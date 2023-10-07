import { model, models, Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: "Please provide location name",
    trim: true,
  },
});

const Category = models.Category || new model("Category", categorySchema);
export default Category;
