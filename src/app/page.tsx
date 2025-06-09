import { SearchRecipeForm } from "@/features/search-recipe-form/search-recipe-form";
import { FishSymbol, Soup } from "lucide-react";

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen">
      <Soup  className="text-slate-200" size={200} />
      <SearchRecipeForm />
    </div>
  );
}
