import { ReactElement, useState } from "react";

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };
  const previousStep = () => {
    if (currentStep >= 0) setCurrentStep(currentStep - 1);
  };
  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  return {
    steps,
    currentStep,
    nextStep,
    previousStep,
    goToStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
  };
};

export default useMultiStepForm;
