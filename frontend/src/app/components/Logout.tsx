"use client";
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation'
import { useAppContext } from '@/app/context/AppContext';

export default function Logout() {
  const { setUser } = useAppContext()
  const router = useRouter();
  async function handleLogout() {
    const response = await fetch("/api/auth/logout", { method: "POST" });
    if (response.ok) {
      toast.success("You have been logged out");
      setUser(null)
      router.push("/login")
    }
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}