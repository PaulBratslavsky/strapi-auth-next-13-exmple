import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("jwt")?.value;

    if (token) cookies().delete("jwt");
    return NextResponse.json({ data: null });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
