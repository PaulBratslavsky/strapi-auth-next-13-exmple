import { NextRequest, NextResponse } from "next/server";

interface StrapiLogin {
  identifier: string;
  password: string;
}

async function strapiRegister(data: StrapiLogin) {
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
    const response = await strapiRegister(data);
    if (response.error) return NextResponse.json({ error: response.error });
    else return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
