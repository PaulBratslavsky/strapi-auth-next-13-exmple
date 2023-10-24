"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import type { StrapiAuthResponse, StrapiLogin } from "@/app/types/types";
import { formAction } from "../lib/form-action";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Loader from "./Loader";

const INITIAL_STATE = {
  identifier: "",
  password: "",
};

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<StrapiLogin>(INITIAL_STATE);

  function handleChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const response = (await formAction({
      formData,
      endpoint: "/api/auth/login",
      method: "POST",
    })) as StrapiAuthResponse;

    if (response?.jwt) router.push("/dashboard");
    setLoading(false);
  }

  if (loading) return <Loader />;

  return (
    <div className="h-auto flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-gray-800 text-2xl font-bold mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <Input
            type="identifier"
            name="identifier"
            label="identifier"
            placeholder="username or email"
            value={formData.identifier}
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            label="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />

          <SubmitButton loading={loading}>Login</SubmitButton>
        </form>
      </div>
    </div>
  );
}
