import { NextResponse } from "next/server";
import connectdb from "../../../utils/db";
import Category from "@/models/category.js";

export const GET = async (req, res) => {
  try {
    await connectdb();
    const categories = await Category.find().lean();
    if (!categories) {
      return new NextResponse("No categories found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};

export const POST = async (req, res) => {
  try {
    await connectdb();
    const categoryData = await req.json();

    // Validate the category data.
    const category = new Category(categoryData);
    await category.validate();

    // Create a new category and save it to the database.
    await category.save();

    // Return the saved category.
    return Response.json(category);
  } catch (error) {
    return new NextResponse(error.message, { status: 400 });
  }
};

export const PUT = async (req, res) => {
  try {
    await connectdb();
    const categoryData = await req.json();
    const categoryId = searchParams.get("id");

    // Find the category and update it with the new data.
    const category = await Category.findByIdAndUpdate(categoryId, categoryData);
    if (!category) {
      return new NextResponse("No category found", { status: 404 });
    }

    // Return the updated category.
    return Response.json(category);
  } catch (error) {
    return new NextResponse(error.message, { status: 400 });
  }
};

export const DELETE = async (req, res) => {
  try {
    await connectdb();
    const categoryId = searchParams.get("id");

    // Find the category and delete it from the database.
    const category = await Category.findByIdAndDelete(categoryId);
    if (!category) {
      return new NextResponse("No category found", { status: 404 });
    }

    // Return a success message.
    return Response.json({ message: "Category deleted successfully" });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
