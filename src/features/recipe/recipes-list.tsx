import { BackButton } from "@/shared/components/back-button";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { Recipe } from "@/shared/types";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  items: Recipe[];
  renderItem: (item: Recipe) => React.ReactNode;
}

export const RecipesList: React.FC<Props> = ({
  className,
  items,
  renderItem,
}) => {
  if (items.length === 0) return items?.length == 0 && <EmptyRecipes />;

  return (
    <>
      <BackButton href={'/'} title="Go Back"/>
      <div
        className={cn(
          "grid grid-cols-2 gap-3 max-w-[500px] min-h-screen",
          className
        )}
      >
        {items?.length !== 0 && items.map((item) => renderItem(item))}
      </div>
    </>
  );
};

function EmptyRecipes() {
  return (
    <div className="flex  gap-5 items-center justify-center my-auto h-screen">
      <h1 className="text-2xl">Nothing found :((</h1>
      <Link href="/">
        <Button>
          <MoveLeft /> Go back
        </Button>
      </Link>
    </div>
  );
}
