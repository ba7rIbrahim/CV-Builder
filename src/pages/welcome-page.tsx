import { Button } from "antd";
import { useUIStore } from "../store/uiStore";
import ToggleLanguagesButtons from "../components/toggle-languages-btns";

const WelcomePage = () => {
  const { toggleComponent } = useUIStore();

  return (
    <div className="flex flex-col items-center justify-center my-8 py-8">
      <h1 className="text-2xl lg:text-[40px] mb-4">
        Welcome to Our Cv Builder
      </h1>
      <div className="lg:h-[450px]">
        <img
          src="https://cv-builder-gamma.vercel.app/static/media/welcome.2b69a3e1.svg"
          className="h-full w-full"
          loading="lazy"
          alt="welcome"
        />
      </div>

      <p className="text-paragraphColor mt-3 lg:mt-5 text-base lg:text-lg">
        Chose the language of your cv content:
      </p>
      <ToggleLanguagesButtons />
      <Button
        type="primary"
        className="rounded-full w-[170px] p-5 shadow-lg text-lg"
        onClick={toggleComponent}
      >
        Let's Start
      </Button>
    </div>
  );
};

export default WelcomePage;
