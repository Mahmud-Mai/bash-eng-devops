import { model, Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category = new model("Category", categorySchema);
export default Category;
