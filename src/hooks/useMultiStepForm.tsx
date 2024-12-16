import { ReactElement, useState } from "react";

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };
  const previousStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
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
