import { Card } from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/utils";
import { Recipe } from "@/shared/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
  recipe: Recipe;
}

export const RecipesListItem: React.FC<Props> = ({ className, recipe }) => {
  return (
    <Link className="flex" href={`/recipes/${recipe.id}`}>
      <Card className={cn("flex-1  p-2", className)}>
        <Image
          className="mb-1 rounded-lg"
          width={300}
          height={300}
          src={recipe.image}
          alt={`image for ${recipe.title}`}
        />
        <p className="text-center">{recipe.title}</p>
      </Card>
    </Link>
  );
};
