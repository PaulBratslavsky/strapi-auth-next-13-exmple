"use server"
import { redirect } from "next/navigation";
import { getAuthUser } from "@/app/lib/get-auth-user";

export default async function ProtectedRoute({
  path = "/",
  children,
}: {
  path: string;
  children: any;
}) {
  const authUser = await getAuthUser();
  console.log("authUser", authUser);
  if (authUser.error) redirect(path);
  return children;
}

// "use client";
// import { useAppContext } from "../context/AppContext";
// import { useRouter } from 'next/navigation'

// export default async function ProtectedRoute({ path = "/", children } : { path: string, children : any}) {
//   const { user } = useAppContext();
//   const router = useRouter()
//   if (!user) {
//     router.push(path)
//     return null
//   };
//   return children;
// }
