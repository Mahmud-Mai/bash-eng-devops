import { NextResponse } from "next/server";
import connectdb from "../../../utils/db";
import Location from "@/models/location.js";

export const GET = async (req, res) => {
  try {
    await connectdb();
    const locations = await Location.find().lean();
    if (!locations) {
      return new NextResponse("No locations found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(locations), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};

export const GET_BY_ID = async (req, res) => {
  try {
    await connectdb();
    const locationId = searchParams.get("id");
    const location = await Location.findById(locationId).lean();
    if (!location) {
      return new NextResponse("No location found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(location), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};

export const POST = async (req, res) => {
  try {
    await connectdb();
    const locationData = await req.json();

    // Validate the location data.
    const location = new Location(locationData);
    await location.validate();

    // Create a new location and save it to the database.
    await location.save();

    // Return the saved location.
    return Response.json(location);
  } catch (error) {
    return new NextResponse(error.message, { status: 400 });
  }
};

export const PUT = async (req, res) => {
  try {
    await connectdb();
    const locationData = await req.json();
    const locationId = searchParams.get("id");

    // Find the location and update it with the new data.
    const location = await Location.findByIdAndUpdate(locationId, locationData);
    if (!location) {
      return new NextResponse("No location found", { status: 404 });
    }

    // Return the updated location.
    return Response.json(location);
  } catch (error) {
    return new NextResponse(error.message, { status: 400 });
  }
};

export const DELETE = async (req, res) => {
  try {
    await connectdb();
    const locationId = searchParams.get("id");

    // Find the location and delete it from the database.
    const location = await Location.findByIdAndDelete(locationId);
    if (!location) {
      return new NextResponse("No location found", { status: 404 });
    }

    // Return a success message.
    return Response.json({ message: "Location deleted successfully" });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
