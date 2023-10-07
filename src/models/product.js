import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: "Please provide a name",
      trim: true,
    },
    desc: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: "Please provide a numeric price",
      trim: true,
    },
    unit: {
      type: Schema.Types.ObjectId,
      ref: "Unit",
    },
    featured: Boolean,
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    image: {
      type: [String],
      trim: true,
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: "Location",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Product = models.Product || new model("Product", productSchema);
export default Product;

// category: {
//   type: String,
//   enum: ["Fruits", "Vegetable", "Animals", "Poultry", "Diary Milk"],
//   required: true,
// },
// units: {
//   type: String,
//   enum: ["bags", "Units", "Gallons"],
//   required: true,
// },
