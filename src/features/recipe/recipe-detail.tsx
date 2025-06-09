import { cn } from "@/shared/lib/utils";
import { RecipeDetail } from "@/shared/types/recipe-detail";
import React from "react";
import Image from "next/image";
import { Card, CardHeader } from "@/shared/components/ui/card";

interface Props {
  className?: string;
  item: RecipeDetail;
}

export const RecipeDetailItem: React.FC<Props> = ({ className, item }) => {
  return (
    <Card className={cn("p-3 w-fit flex-col items-center mt-10", className)}>
      <h1 className="text-center font-bold w-full">{item.title}</h1>
      <div>
        <Image
          className="mb-1 rounded-lg"
          width={400}
          height={400}
          src={item.image}
          alt={`image for ${item.title}`}
        />
      </div>
      <div className="w-full">
        {item.extendedIngredients.map((ingredinet) => (
          <div
            className="flex justify-between  mb-2 border-b border-slate-200"
            key={ingredinet.id}
          >
            <div>
              <p>{ingredinet.name}</p>
              <p className="text-slate-400">{ingredinet.original}</p>
            </div>

            <div className="flex gap-2">
              <p className="text-slate-400">{ingredinet.amount}</p>
              <p className="text-slate-400">{ingredinet.unit}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
