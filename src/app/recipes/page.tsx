import { RecipesSearchParams } from "@/features/search-recipe-form/search-recipe-form";
import { apiLCient } from "@/shared/api/api-client";
import { API_ROUTES } from "@/shared/api/api-routes";

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<RecipesSearchParams>;
}) {
  const params = await searchParams;

  const recipes = await apiLCient.get(API_ROUTES.recipeSearch, {
    params,
  });

  return <div></div>;
}
