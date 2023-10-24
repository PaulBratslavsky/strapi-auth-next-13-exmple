// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// export function middleware(request: NextRequest) {
//   console.log("Hello from middleware!");
//   const path = request.nextUrl.pathname;
//   const isPrivate = path.startsWith("/dashboard");
//   const token = cookies().get("jwt")?.value;
//   // if (!token && isPrivate) return NextResponse.redirect(new URL("/login", request.nextUrl));
  
//   console.log(token + " " + path + " " + isPrivate);  

//   if (token === undefined && isPrivate) { 
//     console.log("Redirecting to login");
//     return NextResponse.redirect(new URL("/login", request.nextUrl));
//   }

// return NextResponse.next();
// }


