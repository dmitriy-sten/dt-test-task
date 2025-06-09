import { Spinner } from "@/shared/components/spinner";
import React from "react";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Spinner />
    </div>
  );
}
