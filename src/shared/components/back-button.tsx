import React from "react";
import { cn } from "../lib/utils";
import Link, { LinkProps } from "next/link";
import { Button } from "./ui/button";
import { MoveLeft } from "lucide-react";

interface Props {
  className?: string;
  href: LinkProps["href"];
  title: string;
}

export const BackButton: React.FC<Props> = ({ className, href, title }) => {
  return (
    <Link href={href} className={cn("fixed right-4 left-4", className)}>
      <Button variant={"outline"}>
        <MoveLeft /> {title}
      </Button>
    </Link>
  );
};
