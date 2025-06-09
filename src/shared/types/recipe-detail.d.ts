export interface RecipeDetail {
    id: number
    title: string
    image: string
    imageType: string
    servings: number
    readyInMinutes: number
    cookingMinutes: number
    preparationMinutes: number
    license: string
    sourceName: string
    sourceUrl: string
    spoonacularSourceUrl: string
    healthScore: number
    spoonacularScore: number
    pricePerServing: number
    analyzedInstructions: any[]
    cheap: boolean
    creditsText: string
    cuisines: any[]
    dairyFree: boolean
    diets: any[]
    gaps: string
    glutenFree: boolean
    instructions: string
    ketogenic: boolean
    lowFodmap: boolean
    occasions: any[]
    sustainable: boolean
    vegan: boolean
    vegetarian: boolean
    veryHealthy: boolean
    veryPopular: boolean
    whole30: boolean
    weightWatcherSmartPoints: number
    dishTypes: string[]
    extendedIngredients: ExtendedIngredient[]
    summary: string
    winePairing: WinePairing
  }
  
  export interface ExtendedIngredient {
    aisle: string
    amount: number
    consistency: string
    id: number
    image: string
    measures: Measures
    meta: string[]
    name: string
    original: string
    originalName: string
    unit: string
  }
  
  export interface Measures {
    metric: Metric
    us: Us
  }
  
  export interface Metric {
    amount: number
    unitLong: string
    unitShort: string
  }
  
  export interface Us {
    amount: number
    unitLong: string
    unitShort: string
  }
  
  export interface WinePairing {
    pairedWines: string[]
    pairingText: string
    productMatches: ProductMatch[]
  }
  
  export interface ProductMatch {
    id: number
    title: string
    description: string
    price: string
    imageUrl: string
    averageRating: number
    ratingCount: number
    score: number
    link: string
  }
  