import { Button } from "antd";
import { useUIStore } from "../store/uiStore";

const ToggleLanguagesButtons = () => {
  const { currentLanguage, toggleLanguage } = useUIStore();
  return (
    <div className="mb-12 mt-4 lg:mb-16">
      <Button
        type={currentLanguage === "english" ? "primary" : "default"}
        className="rounded-none"
        onClick={toggleLanguage}
      >
        English
      </Button>
      <Button
        type={currentLanguage === "arabic" ? "primary" : "default"}
        className="rounded-none"
        onClick={toggleLanguage}
      >
        Arabic
      </Button>
    </div>
  );
};

export default ToggleLanguagesButtons;
