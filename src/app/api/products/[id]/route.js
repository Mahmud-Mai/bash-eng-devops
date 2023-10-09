import { NextResponse } from "next/server";
import connectdb from "../../../../utils/db.js";
import Product from "@/models/product.js";

export const GET = async (req, { params }) => {
  const productId = params.id;
  try {
    await connectdb();
    const product = await Product.findById(productId)
      .populate(["category", "unit"])
      .lean();
    if (!product) {
      return new NextResponse("No product found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error!", { status: 500 });
  }
};
