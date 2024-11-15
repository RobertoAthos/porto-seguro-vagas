import React from "react";

export default function FieldErrorMessage({ message }: { message: string }) {
  return <span className="text-red-500 text-sm">{message}</span>;
}
