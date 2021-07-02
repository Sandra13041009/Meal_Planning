/**
 * A wrapper for each Onboarding page. It displays
 * the page title, prompt, and instruction.
 *
 * @param {{
 *  prompt: string,
 *  instruction: string,
 *  children: React.ReactNode
 * }} props
 */
export function OnboardingScreen(props) {
  return (
    <div className="Onboarding">
      <h1>
        <strong>Let's get you started!</strong>
      </h1>

      <div className="subheading">
        <h2 className="Subheading">{props.prompt}</h2>
      </div>
      <span>({props.instruction})</span>

      <div>{props.children}</div>
    </div>
  );
}
