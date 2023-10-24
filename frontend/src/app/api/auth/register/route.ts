import { NextRequest, NextResponse } from "next/server";

interface StrapiRegister {
  username: string;
  email: string;
  password: string;
}

async function strapiRegister(data: StrapiRegister) {
  const url = `${process.env.STRAPI_URL}/api/auth/local/register`;
  const body = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, body)
    return response.json();
  } catch (error) {
    console.log(error, "############### REGISTER ERROR ###############");
  }
}

export async function POST(request: NextRequest) {
  const data = (await request.json()) as StrapiRegister;
  try {
    const response = await strapiRegister(data);
    if (response.error) return NextResponse.json({ error: response.error });
    else {
      const newResponse = NextResponse.json(response);
      newResponse.cookies.set("jwt", response.jwt, {
        httpOnly: true,
        path: "/",
      });
      return newResponse;
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}


/*

   // cookies().set("jwt", data.jwt, {
        //   httpOnly: true,
        //   secure: process.env.NODE_ENV !== "development",
        //   sameSite: "strict",
        //   path: "/",
        //   expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
        // });
        */