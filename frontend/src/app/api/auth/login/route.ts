import type { StrapiLogin } from "@/app/types/types";
import { NextRequest, NextResponse } from "next/server";


async function strapiLogin(data: StrapiLogin) {
  const url = `${process.env.STRAPI_URL}/api/auth/local`;
  const body = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, body);
    return response.json();
  } catch (error) {
    console.log(error, "############### LOGIN ERROR ###############");
  }
}

export async function POST(request: NextRequest) {
  const data = (await request.json()) as StrapiLogin;
  try {
    const response = await strapiLogin(data);
    if (response.error) return NextResponse.json({ error: response.error });
    else return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
