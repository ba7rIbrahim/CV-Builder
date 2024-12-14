import { Button } from "antd";
import { useUIStore } from "../store/uiStore";

interface FormButtonProps {
  nextStep: () => void;
  previousStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const FormButtons = ({
  nextStep,
  previousStep,
  isFirstStep,
  isLastStep,
}: FormButtonProps) => {
  const { toggleComponent } = useUIStore();
  return (
    <div className="flex justify-end gap-3 p-4">
      <Button
        type="default"
        className="rounded-sm"
        onClick={() => {
          if (isFirstStep) toggleComponent();
          else previousStep();
        }}
      >
        Prev
      </Button>
      <Button
        type="primary"
        className="rounded-sm"
        onClick={() => {
          nextStep();
        }}
      >
        {!isLastStep ? "Next" : "Finish"}
      </Button>
    </div>
  );
};

export default FormButtons;
