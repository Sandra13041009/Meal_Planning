/**
 * TODO as of 6/28/21:
 *  * Get rid of DevRecipePicture behavior
 */

import DevRecipePicture from './assets/DevRecipePicture.png'

import { Card } from "react-bootstrap"
import { RecipeRating } from '../../RecipeRating/RecipeRating'
import { RecipeOverview } from '../../../../client/RecipeOverview'

/**
 * @param {{
 *  recipe: RecipeOverview,
 *  onClick?: () => void
 * }} props
 */
export function RecipeCard(props) {
    const { recipe } = props

    // spoonacular score is 0-100; divide by 20 to get 0-5
    const rating = recipe.spoonacularScore ? Math.floor(recipe.spoonacularScore / 20) : undefined

    return <Card onClick={props.onClick}>
        <Card.Img src={recipe.image ?? DevRecipePicture} />
        <Card.Title>{recipe.title}</Card.Title>
        {rating !== undefined ? <RecipeRating rating={rating} outOf={5} /> : ''}
    </Card>
}