import { NextResponse } from "next/server";

export const GET = (req, res) => {
  //fetch

  return new NextResponse("It works!", { status: 200 });
};
