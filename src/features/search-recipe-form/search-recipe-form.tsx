"use client";

import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { MoveRight } from "lucide-react";
import React from "react";
import { CuisineVariantsType, CuisineVarinats } from "./model/constans";
import qs from "qs";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

export interface RecipesSearchParams {
  query?: string;
  cuisine?: CuisineVariantsType;
  maxReadyTime?: number;
}

export const SearchRecipeForm: React.FC<Props> = ({ className }) => {
  const [values, setValues] = React.useState<RecipesSearchParams>({});
  const router = useRouter();

  const handleChange = (
    key: keyof RecipesSearchParams,
    value: string | CuisineVariantsType
  ) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNavigate = () => {
    const queryString = qs.stringify(values);
    router.push(`/recipes?${queryString}`);
  };

  return (
    <div className={className}>
      <Card className="flex flex-row p-3 gap-3 items-center">
        <Input
          value={values.query}
          onChange={(e) => handleChange("query", e.target.value)}
          placeholder="Query"
        />
        <Input
          value={values.maxReadyTime}
          type="number"
          onChange={(e) => handleChange("maxReadyTime", e.target.value)}
          placeholder="Max ready time"
        />
        <Select
          value={values?.cuisine}
          onValueChange={(value) => handleChange("cuisine", value)}
        >
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Cuisine" />
          </SelectTrigger>
          <SelectContent>
            {CuisineVarinats.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          disabled={!Object.values(values).find((item) => item !== "")}
          onClick={handleNavigate}
        >
          Next
          <MoveRight />
        </Button>
      </Card>
    </div>
  );
};
