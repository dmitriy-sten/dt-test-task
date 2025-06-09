import { cn } from "@/shared/lib/utils";
import { RecipeDetail } from "@/shared/types/recipe-detail";
import React from "react";
import Image from "next/image";
import { Card } from "@/shared/components/ui/card";
import { BackButton } from "@/shared/components/back-button";

interface Props {
  className?: string;
  item: RecipeDetail;
}

export const RecipeDetailItem: React.FC<Props> = ({ className, item }) => {
  return (
    <div className="my-4 flex gap-2 items-center flex-col">
      <BackButton href={"/recipes"} title="Go back" className="static" />
      <Card
        className={cn(
          "p-3 w-fit flex-col  max-w-[500px] items-center ",
          className
        )}
      >
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
          {item.extendedIngredients.map((ingredinet, id) => (
            <div
              className="flex justify-between  mb-2 border-b border-slate-200"
              key={id}
            >
              <div>
                <p>{ingredinet.name}</p>
                <p className="text-slate-400">{ingredinet.original}</p>
              </div>

              <div className="flex gap-1">
                <p className="text-slate-500">{ingredinet.amount}</p>
                <p className="text-slate-500">{ingredinet.unit}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
