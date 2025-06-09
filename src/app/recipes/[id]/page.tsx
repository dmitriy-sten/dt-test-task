import { RecipeDetailItem } from "@/features/recipe/recipe-detail";
import { apiClient } from "@/shared/api/api-client";
import { API_ROUTES } from "@/shared/api/api-routes";
import { RecipeDetail } from "@/shared/types/recipe-detail";

export default async function RecipeIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipeDetail = await apiClient<RecipeDetail>(
    API_ROUTES.recipeDetailById(id)
  );

  return (
    <div className="flex w-full items-center h-screen justify-center ">
      <RecipeDetailItem item={recipeDetail} />
    </div>
  );
}
