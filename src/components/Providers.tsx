"use client"
import { UserProvider } from "@/context/userContext";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}
