import { NextResponse, NextRequest } from "next/server";

async function strapiMe(authToken: string) {
  const url = `${process.env.STRAPI_URL}/api/users/me`;
  
  const body = {
    method: "GET",
    headers: {
      Authorization: authToken,
    },
  };

  try {
    const response = await fetch(url, body);
    return response.json();
  } catch (error) {
    console.log(error, "############### REGISTER ERROR ###############");
  }
}

export async function GET(request: NextRequest) {
  const authToken = request.headers.get("Authorization");
  try {
    const response = await strapiMe(authToken as string);
    if (response.error) return NextResponse.json({ error: response.error });
    else return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}


