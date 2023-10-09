import { NextResponse } from "next/server";
// import connectdb from ""

export const GET = (req, res) => {
  //fetch
try {
  await connectdb
  
  return new NextResponse(products, { status: 200 });
} catch (error) {
  
  return new NextResponse("Database Error!", { status: 500 });
}
};
