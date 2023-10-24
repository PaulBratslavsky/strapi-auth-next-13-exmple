"use client";
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation'


export default function Logout() {
  const router = useRouter();
  async function handleLogout() {
    alert("You are about to logout");
    const response = await fetch("/api/auth/logout", { method: "POST" });
    if (response.ok) {
      toast.success("You have been logged out");
      router.push("/")
    }
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}