"use client";
import { useRouter } from "next/navigation";

export default function Redirect({
  token,
  path,
}: {
  token: string;
  path: string;
}) {
  const router = useRouter();
  if (!token) router.push(path);
  return null;
}
