import { Button } from "antd";
import { useUIStore } from "../store/uiStore";

const WelcomePage = () => {
  const { currentLanguage, toggleLanguage } = useUIStore();
  const { toggleComponent } = useUIStore();

  return (
    <div className="flex flex-col items-center justify-center my-8 py-8">
      <h1 className="text-2xl lg:text-[40px] mb-4">
        Welcome to Our Cv Builder
      </h1>
      <div className="lg:h-[450px]">
        <img
          src="src/assets/welcome.svg"
          alt="welcome"
          className="h-full w-full"
        />
      </div>

      <p className="text-paragraphColor mt-3 lg:mt-5 text-base lg:text-lg">
        Chose the language of your cv content:
      </p>
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
      <Button
        type="primary"
        className="rounded-full w-[170px] p-5 shadow-lg text-lg "
        onClick={toggleComponent}
      >
        Let's Start
      </Button>
    </div>
  );
};

export default WelcomePage;
