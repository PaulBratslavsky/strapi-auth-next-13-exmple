"use client";
import { useState } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
};

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
const [formData, setFormData] = useState(INITIAL_STATE);
  const [message, setMessage] = useState(null);

  function handleChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    alert("TODO: implement register");
  }

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
