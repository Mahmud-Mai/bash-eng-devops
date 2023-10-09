import { NextResponse } from "next/server";
import connectdb from "../../../utils/db";
import Product from "@/models/product.js";

export const GET = async (req, res) => {
  try {
    await connectdb();
    const products = await Product.find()
      .populate([
        { path: "category", select: "name" },
        { path: "unit", select: "name" },
      ])
      .lean();
    // { path: "location", select: "state" },
    // { path: "user", select: "phoneNumber" },

    if (!products) {
      return new NextResponse("No products found", { status: 404 });
    }

    const formattedProducts = products.map((product) => {
      const formattedProduct = {
        ...product,
        category: product.category?.name,
        unit: product.unit?.name,
      };
      return formattedProduct;
    });

    return new NextResponse(JSON.stringify(formattedProducts), { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error!", { status: 500 });
  }
};

export const POST = async (req, res) => {
  try {
    await connectdb();
    const productData = await req.json();

    // Validate the product data.
    const product = new Product(productData);
    await product.validate();

    // Create a new product and save it to the Internal Server.
    await product.save();

    // Return the saved product.
    return Response.json(product);
  } catch (error) {
    return new NextResponse(error.message, { status: 400 });
  }
};

export const PUT = async (req, res) => {
  try {
    await connectdb();
    const productData = await req.json();
    const productId = searchParams.get("id");

    // Validate the product data.
    const product = await Product.findById(productId);
    if (!product) {
      return new NextResponse("No product found", { status: 404 });
    }
    product.set(productData);
    await product.validate();

    // Update the product and save it to the Internal Server.
    await product.save();

    // Return the updated product.
    return Response.json(product);
  } catch (error) {
    return new NextResponse(error.message, { status: 400 });
  }
};

export const DELETE = async (req, res) => {
  try {
    await connectdb();
    const productId = searchParams.get("id");

    // Find the product and delete it from the Internal Server.
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return new NextResponse("No product found", { status: 404 });
    }

    // Return a success message.
    return Response.json({ message: "Product deleted successfully" });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
