import { RecipesList } from "@/features/recipe/recipes-list";
import { RecipesListItem } from "@/features/recipe/recipes-list-item";
import { RecipesSearchParams } from "@/features/search-recipe-form/search-recipe-form";
import { apiClient } from "@/shared/api/api-client";
import { API_ROUTES } from "@/shared/api/api-routes";
import { Recipe, Response } from "@/shared/types";

import qs from "qs";

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<RecipesSearchParams>;
}) {
  const params = await searchParams;

  const recipes = await apiClient<Response<Recipe[]>>(
    API_ROUTES.recipeSearch + `?${qs.stringify(params)}`,
    {
      next: {
        revalidate: 1000 * 60,
      },
    }
  );


  return (
    <div className="flex w-full justify-center">
      <RecipesList
        items={recipes.results}
        renderItem={(recipe) => <RecipesListItem key={recipe.id} recipe={recipe} />}
      />
    </div>
  );
}
