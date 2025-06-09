export const API_ROUTES = {

    recipeSearch:'/recipes/complexSearch',
    recipeDetailById:(recipeId:string | number) =>`/recipes/${recipeId}/information`



} as const