"use client";

import { Button } from "@/shared/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center flex-col gap-2 w-screen h-screen px-10 ">
      <h2 className="text-red-400 text-3xl">Something went wrong!</h2>

      <p className="mb-2 text-2xl">Message: {error.message}</p>
      <Link href={"/"}>
        <Button variant={"outline"}>
          <MoveLeft /> Go back
        </Button>
      </Link>
    </div>
  );
}
