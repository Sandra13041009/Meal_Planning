import React from "react";
import { OnboardingScreen } from "./onboarding/OnboardingScreen";
import { Diet } from "./onboarding/Diet";

export default function Welcome() {
  return (
    <div className="container">
      <div className="wrapper">
        <OnboardingScreen />
        <Diet />
      </div>
    </div>
  );
}
