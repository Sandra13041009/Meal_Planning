export type SPDiet = 
    "Gluten Free" | 
    "Ketogenic" | 
    "Vegetarian" | 
    "Lacto-Vegetarian" | 
    "Ovo-Vegeterian" | 
    "Vegan" | 
    "Pescetarian" | 
    "Paleo" | 
    "Primal" | 
    "Whole30"

export type SPIntolerance = 
    "Dairy" |
    "Egg" |
    "Gluten" |
    "Grain" |
    "Peanut" |
    "Seafood" |
    "Sesame" |
    "Shellfish" |
    "Soy" |
    "Sulfite" |
    "Tree Nut" |
    "Wheat"

export type SPType =
    "main course" |
    "side dish" |
    "dessert" |
    "appetizer" |
    "salad" |
    "bread" |
    "breakfast" |
    "soup" |
    "beverage" |
    "sauce" |
    "marinade" |
    "fingerfood" |
    "snack" |
    "drink"

export type SPComplexSearchRecipe = {
    id: number,
    title: string,
    image: string,
    imageType: string
}

export type SPComplexSearchResult = {
    results: ReadonlyArray<SPComplexSearchRecipe>,
    offset: number,
    number: number,
    totalResults: number
}
