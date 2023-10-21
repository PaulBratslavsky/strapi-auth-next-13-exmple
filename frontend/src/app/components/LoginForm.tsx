"use client";
import type { StrapiLogin } from "@/app/types/types";
import { formAction } from "../lib/form-action";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import Input from "./Input";

const INITIAL_STATE = {
  identifier: "",
  password: "",
};

export default function LoginForm() {
  const [formData, setFormData] = useState<StrapiLogin>(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.dir(formData, { depth: null });

    await formAction({
      formData,
      endpoint: "/api/auth/login",
      method: "POST",
      setLoading,
      setMessage,
    });

    setFormData(INITIAL_STATE);
  }

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
          <p aria-live="polite" className="sr-only" role="status">
            {message}
          </p>
          <p className="flex justify-center items-center text-purple-700 p-2">
            {message}
          </p>
        </form>
      </div>
    </div>
  );
}
