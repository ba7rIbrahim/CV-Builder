import ColorForm from "../components/form-pages/color-form";
import EducationInfoForm from "../components/form-pages/education-form";
import ExperienceInfoForm from "../components/form-pages/experience-form";
import FinishForm from "../components/form-pages/finish-form";
import MiscellaneousForm from "../components/form-pages/miscellaneous";
import PersonalInfoForm from "../components/form-pages/personal-form";
import ProjectInfoForm from "../components/form-pages/project-form";
import TemplatesForm from "../components/form-pages/templates-form";
import useMultiStepForm from "../hooks/useMultiStepForm";
import FormButtons from "../components/form-button";

const MainFormPage = () => {

  const {
    steps,
    currentStep,
    nextStep,
    previousStep,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <PersonalInfoForm />,
    <ExperienceInfoForm />,
    <ProjectInfoForm />,
    <EducationInfoForm />,
    <MiscellaneousForm />,
    <ColorForm />,
    <TemplatesForm />,
    <FinishForm />,
  ]);
  return (
    <>
      <div className="container">
        <h1 className="text-2xl my-10">Enter Your Information</h1>
        <div className="bg-white border border-[#f0f0f0] text-left">
          {steps[currentStep]}
          <FormButtons nextStep={nextStep} previousStep={previousStep} isFirstStep={isFirstStep} isLastStep={isLastStep} />
        </div>
      </div>
    </>
  );
};

export default MainFormPage;
