"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

interface Providers {
  children: React.ReactNode;
}

export default function Providers({ children }: Providers) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
