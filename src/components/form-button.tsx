import { Button } from "antd";
import { useUIStore } from "../store/uiStore";

interface FormButtonProps {
  nextStep: () => void;
  previousStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  validateForm: () => Promise<Record<string, string>>
}

const FormButtons = ({
  nextStep,
  previousStep,
  isFirstStep,
  isLastStep,
  validateForm,
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
        htmlType="submit"
        className="rounded-sm"
        onClick={() => {
          validateForm()
            .then((errors) => {
              if (Object.keys(errors).length === 0) {
                nextStep();
              } else {
                console.log("Validation errors:", errors);
              }
            })
            .catch((error: unknown) => {
              console.error("An error occurred during validation:", error);
            });
        }}
      >
        {!isLastStep ? "Next" : "Finish"}
      </Button>
    </div>
  );
};

export default FormButtons;
