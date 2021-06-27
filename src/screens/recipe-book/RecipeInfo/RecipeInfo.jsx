import Back from './assets/back.png'

import { useEffect, useState } from 'react'
import { FullRecipe } from '../../../client/FullRecipe'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { TimeServingsRating } from './TimeServingsRating/TimeServingsRating'
import { Tab, Tabs } from '../../common/Tabs/Tabs'
import { IngredientsTab } from './IngredientsTab/IngredientsTab'
import { InstructionsTab } from './InstructionsTab/InstructionsTab'

/**
 * @param {{
 *  getRecipe: () => Promise<FullRecipe>,
 *  onBackButtonClick?: () => void
 * }} props
 */
export function RecipeInfo(props) {

    const [recipe, setRecipe] = useState({
        title: '',
        readyInMinutes: 0,
        servings: 0,
        image: '',
        spoonacularScore: 0,
        extendedIngredients: [],
        instructions: ''
    })

    useEffect(() => {
        props.getRecipe().then(setRecipe)
    }, [])

    const {
        title,
        readyInMinutes,
        servings,
        image,
        spoonacularScore,
        extendedIngredients,
        instructions
    } = recipe

    const rating = spoonacularScore !== undefined && spoonacularScore !== null ? Math.floor(spoonacularScore / 20) : 0

    const [currentTab, setCurrentTab] = useState("Ingredients")

    return <Container>
        <Row><Col><Button onClick={props.onBackButtonClick}><img src={Back} /></Button></Col></Row>
        
        <Row><Col><h2>{title}</h2></Col></Row>

        <TimeServingsRating time={readyInMinutes} servings={servings} rating={rating} />

        <Row><Col><img src={image} alt="Recipe Picture" /></Col></Row>

        <Tabs>
            <Tab active={currentTab === "Ingredients"} onClick={() => setCurrentTab("Ingredients")}>Ingredients</Tab>
            <Tab active={currentTab === "Instructions"} onClick={() => setCurrentTab("Instructions")}>Instructions</Tab>
        </Tabs>

        {
            currentTab === "Ingredients" ? 
            <IngredientsTab ingredients={extendedIngredients} /> : 
                currentTab === "Instructions" ?
                <InstructionsTab instructions={instructions} /> :
                ''
        }
    </Container>
}