import { RecipeOverview } from '../client/RecipeOverview'

export type MealPlan = {
    name: string,
    order: number,
    recipes: ReadonlyArray<RecipeOverview>
}

export type DayMealPlan = {
    date: Date,
    meals: ReadonlyArray<MealPlan>
}