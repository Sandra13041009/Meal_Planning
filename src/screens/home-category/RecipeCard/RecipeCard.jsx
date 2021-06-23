import { Card } from "react-bootstrap"
import { RecipeRating } from "../RecipeRating/RecipeRating"

/**
 * @param {{
 *  title?: string,
 *  rating?: 0 | 1 | 2 | 3 | 4 | 5,
 *  imgSrc?: any
 * }} props 
 */
export function RecipeCard(props) {
    return <Card style={{ width: '90px' }}>
        <Card.Img src={props.imgSrc} />
        <Card.Title>{props.title}</Card.Title>
        {props.rating ? <RecipeRating rating={props.rating} /> : ''}
    </Card>
}