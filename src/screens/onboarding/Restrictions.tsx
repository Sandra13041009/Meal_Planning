import { OnboardingScreen } from "./OnboardingScreen"
import { TwoColumnButtons } from "../../inputs/TwoColumnButtons/TwoColumnButtons"
import { Button } from "react-bootstrap"

export type RestrictionsProps = {

    /** A Map of restriction-strings to booleans indicating whether they are selected or not */
    restrictions: Map<string, boolean>

    /** A callback for when a restriction-button is clicked */
    onClick?: (restriction: string) => void

}

/**
 * The page for the user to select any dietary restrictions
 * (elsewhere referred to as 'intolerances' or 'allergies').
 */
export function Restrictions(props: RestrictionsProps) {

    console.log(props.restrictions)

    const buttons: React.ReactNode[] = []

    props.restrictions.forEach((isSelected, restriction) => {

        const onClick = () => {
            if (props.onClick !== undefined) {
                props.onClick(restriction)
            }
        }

        buttons.push(<Button active={isSelected} onClick={onClick} key={restriction}>
            {restriction}
        </Button>)

    })

    return <OnboardingScreen
        prompt="Do you have any dietary restrictions?"
        instruction="Tap on any restrictions you may have."
    >
        <TwoColumnButtons>
            {buttons}
        </TwoColumnButtons>
    </OnboardingScreen>
}