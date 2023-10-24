import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

async function getAuthUser(token: string | undefined)  {
  const response = await fetch("http://127.0.0.1:1337/api/users/me", {
    headers: { Authorization: `Bearer ${token}`},
  });
  return  await response.json();
}


export default async function ProtectedRoute({ component } : { component: any}) {
  const cookeStore = cookies();
  const token = cookeStore.get("jwt")?.value;

  const Component = component;
  const authUser = await getAuthUser(token);
  if (authUser.error) redirect("/login");
  return <Component authUser={authUser} />;
}
