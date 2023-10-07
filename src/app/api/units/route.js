import { NextResponse } from "next/server";
import connectdb from "../../../utils/db";
import Unit from "@/models/unit.js";

export const GET = async (req, res) => {
  try {
    await connectdb();
    const units = await Unit.find().lean();
    if (!units) {
      return new NextResponse("No units found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(units), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};

export const GET_BY_ID = async (req, res) => {
  try {
    await connectdb();
    const unitId = searchParams.get("id");
    const unit = await Unit.findById(unitId).lean();
    if (!unit) {
      return new NextResponse("No unit found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(unit), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};

export const POST = async (req, res) => {
  try {
    await connectdb();
    const unitData = await req.json();

    // Validate the unit data.
    const unit = new Unit(unitData);
    await unit.validate();

    // Create a new unit and save it to the database.
    await unit.save();

    // Return the saved unit.
    return Response.json(unit);
  } catch (error) {
    return new NextResponse(error.message, { status: 400 });
  }
};

export const PUT = async (req, res) => {
  try {
    await connectdb();
    const unitData = await req.json();
    const unitId = searchParams.get("id");

    // Find the unit and update it with the new data.
    const unit = await Unit.findByIdAndUpdate(unitId, unitData);
    if (!unit) {
      return new NextResponse("No unit found", { status: 404 });
    }

    // Return the updated unit.
    return Response.json(unit);
  } catch (error) {
    return new NextResponse(error.message, { status: 400 });
  }
};

export const DELETE = async (req, res) => {
  try {
    await connectdb();
    const unitId = searchParams.get("id");

    // Find the unit and delete it from the database.
    const unit = await Unit.findByIdAndDelete(unitId);
    if (!unit) {
      return new NextResponse("No unit found", { status: 404 });
    }

    // Return a success message.
    return Response.json({ message: "Unit deleted successfully" });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
