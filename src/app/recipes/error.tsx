"use client";

import { Button } from "@/shared/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <div className="flex item-center justify-center flex-col gap-2 w-full h-full ">
      <p className="text-red-600">Error:</p>
      <Link href={"/"}>
        <Button variant={"outline"}>
          <MoveLeft /> Go back
        </Button>
      </Link>
    </div>
  );
}
