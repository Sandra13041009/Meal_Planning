import { Recipe } from '../../../recipes/Recipe'
import { RecipeCard } from '../RecipeCard/RecipeCard'
import { Container, Row, Col } from 'react-bootstrap'

export type RecipesGridProps = {
    recipes: ReadonlyArray<Recipe>
}

export function RecipesGrid(props: RecipesGridProps) {
    return <Container>
        {
        props.recipes.map((recipe1, index) => {
            if (index % 2 === 0) {
                const recipe2 = props.recipes[index + 1]
                return <Row>
                    <Col>
                        <RecipeCard title={recipe1.title} rating={recipe1.rating} />
                    </Col>
                    <Col>
                        {recipe2 !== undefined && recipe2 !== null ? <RecipeCard title={recipe2.title} rating={recipe2.rating} /> : ''}
                    </Col>
                </Row>
            } else {
                return ''
            }
        })
    }
    </Container>
}