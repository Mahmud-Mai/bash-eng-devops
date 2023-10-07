import { NextResponse } from "next/server";
import connectdb from "../../../utils/db";
import Product from "@/models/product.js";

export const GET = async (req, res) => {
  try {
    await connectdb();
    const products = await Product.find().lean();
    if (!products) {
      return new NextResponse("No products found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};

export const GET_BY_ID = async (req, res) => {
  try {
    await connectdb();
    const productId = req.query.id;
    const product = await Product.findById(productId).lean();
    if (!product) {
      return new NextResponse("No product found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};

export const POST = async (req, res) => {
  try {
    await connectdb();
    const productData = await req.json();

    // Validate the product data.
    const product = new Product(productData);
    await product.validate();

    // Create a new product and save it to the database.
    await product.save();

    // Return the saved product.
    return res.json(product);
  } catch (error) {
    return new NextResponse(error.message, { status: 400 });
  }
};

export const PUT = async (req, res) => {
  try {
    await connectdb();
    const productData = await req.json();
    const productId = req.query.id;

    // Validate the product data.
    const product = await Product.findById(productId);
    if (!product) {
      return new NextResponse("No product found", { status: 404 });
    }
    product.set(productData);
    await product.validate();

    // Update the product and save it to the database.
    await product.save();

    // Return the updated product.
    return res.json(product);
  } catch (error) {
    return new NextResponse(error.message, { status: 400 });
  }
};

export const DELETE = async (req, res) => {
  try {
    await connectdb();
    const productId = req.query.id;

    // Find the product and delete it from the database.
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return new NextResponse("No product found", { status: 404 });
    }

    // Return a success message.
    return res.json({ message: "Product deleted successfully" });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
