import { NextResponse } from "next/server";
import connectdb from "../../../utils/db";
import User from "@/models/user.js";

export const GET = async (req, res) => {
  try {
    await connectdb();
    const users = await User.find().lean();
    if (!users) {
      return new NextResponse("No users found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};

export const POST = async (req, res) => {
  try {
    await connectdb();
    const userData = await req.json();

    // Validate the user data.
    const user = new User(userData);
    await user.validate();

    // Create a new user and save it to the database.
    await user.save();

    // Return the saved user.
    return Response.json(user);
  } catch (error) {
    return new NextResponse(error.message, { status: 400 });
  }
};

export const PUT = async (req, res) => {
  try {
    await connectdb();
    const userData = await req.json();
    const userId = searchParams.get("id");

    // Find the user and update it with the new data.
    const user = await User.findByIdAndUpdate(userId, userData);
    if (!user) {
      return new NextResponse("No user found", { status: 404 });
    }

    // Return the updated user.
    return Response.json(user);
  } catch (error) {
    return new NextResponse(error.message, { status: 400 });
  }
};

export const DELETE = async (req, res) => {
  try {
    await connectdb();
    const userId = searchParams.get("id");

    // Find the user and delete it from the database.
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return new NextResponse("No user found", { status: 404 });
    }

    // Return a success message.
    return Response.json({ message: "User deleted successfully" });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};

export const GET_BY_ID = async (req, res) => {
  try {
    await connectdb();
    const userId = searchParams.get("id");
    const user = await User.findById(userId).lean();
    if (!user) {
      return new NextResponse("No user found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};
