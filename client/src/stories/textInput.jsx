// src/components/ui/TextInput.jsx
import React from "react";

export default function TextInput({
  label,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type="text"
        className={`px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
