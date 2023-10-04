import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Fruits", "Vegetable", "Animals", "Poultry", "Diary Milk"],
      required: true,
    },
    units: {
      type: String,
      enum: ["bags", "Units", "Gallons"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);

export default Product;
