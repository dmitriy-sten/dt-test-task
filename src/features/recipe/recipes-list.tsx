import { cn } from "@/shared/lib/utils";
import { Recipe } from "@/shared/types";
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
  return (
    <div className={cn("grid grid-cols-2 gap-3 max-w-[500px]", className)}>
      {items.length == 0 && <div>Nothing found</div>}

      {items.length !== 0 && items.map((item, idx) => renderItem(item))}
    </div>
  );
};
