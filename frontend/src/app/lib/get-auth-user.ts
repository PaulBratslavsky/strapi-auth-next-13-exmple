import { cookies } from "next/headers";

export async function getAuthUser() {
  const cookeStore = cookies();
  const token = cookeStore.get("jwt")?.value;
  const response = await fetch("http://127.0.0.1:1337/api/users/me", {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  return await response.json();
}
