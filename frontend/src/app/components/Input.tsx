import React from 'react'

export default function Input({
  type,
  name,
  label,
  placeholder,
  value,
  error,
  onChange,
  required = false,
} : {
  type: string,
  name: string,
  label: string,
  placeholder: string,
  value: string,
  error?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  required?: boolean,
}) {
  return (
    <div className="mb-4">
    <label
      className="block text-sm font-medium text-gray-700"
      htmlFor="name"
    >
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className="mt-1 p-2 w-full border rounded-md text-gray-950"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p> }
  </div>
  )
}
