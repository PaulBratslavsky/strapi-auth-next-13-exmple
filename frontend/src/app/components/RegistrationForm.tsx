"use client";
import type { StrapiAuthResponse, StrapiRegister } from "@/app/types/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { formAction } from "../lib/form-action";
import Loader from "./Loader";
import Input from "./Input";
import Message from "./Message";
import SubmitButton from "./SubmitButton";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
};

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<StrapiRegister>(INITIAL_STATE);
  const [message, setMessage] = useState<string>("");

  function handleChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const response = (await formAction({
      formData,
      endpoint: "/api/auth/register",
      method: "POST",
      setMessage,
    })) as StrapiAuthResponse;

    if (response?.jwt) router.push("/dashboard");
    setFormData(INITIAL_STATE);
    setLoading(false);
  }

  if (loading) return <Loader />;

  return (
    <div className="h-auto flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-gray-800  text-2xl font-bold mb-4">Register</h2>

        <form onSubmit={handleSubmit}>
          <Input
            type="username"
            name="username"
            label="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
          />

          <Input
            type="email"
            name="email"
            label="email"
            placeholder="email"
            value={formData.email}
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

          <SubmitButton loading={loading}>Register</SubmitButton>
        </form>
      </div>
    </div>
  );
}
