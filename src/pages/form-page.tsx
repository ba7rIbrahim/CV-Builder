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
import { Form, Formik } from "formik";
import { FormDataType } from "../types/FormData";
import * as Yup from "yup";
import React from "react";
import { useUIStore } from "../store/uiStore";

const validateFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("email must be a valid email"),
  mobile: Yup.string()
    .required("Mobile is required")
    .min(11, "must be like this 07700000000")
    .max(11, "must be like this 07700000000"),
  street: Yup.string().required("Street is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  linkedin: Yup.string(),
  github: Yup.string(),
  positionOne: Yup.string().required("Position is required"),
  skills: Yup.string(),
  organization: Yup.string().required("Organization is required"),
});

const MainFormPage = () => {
  const { dateRange, collegeDate } = useUIStore();

  const INITIAL_DATA: FormDataType = {
    name: "a",
    email: "b@b.com",
    mobile: "07700000000",
    street: "s",
    city: "s",
    country: "s",
    linkedin: "s",
    github: "s",
    positionOne: "s",
    skills: "s",
    organization: "Facebook",
    positionTwo: "Inten",
    duration: dateRange,
    descriptionOne:
      "Lorem Ipsum is simply dummy text of the printing anpsum has been the industrys standard dummy text ever since the 1500s, when an unknow",
    title: "CV builder",
    link: "https://github.com/ba7rIbrahim/CV-Builder",
    descriptionTwo:
      "Lorem Ipsum is simply dummy text of the printing anpsum has been the industrys standard dummy text ever since the 1500s, when an unknow",
    college: "UOB",
    year: collegeDate,
    qualification: "science",
    descriptionThree:
      "Lorem Ipsum is simply dummy text of the printing anpsum has been the industrys standard dummy text ever since the 1500s, when an unknow",
  };

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
          <Formik
            initialValues={INITIAL_DATA}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={validateFormSchema}
          >
            {({
              values,
              handleChange,
              handleBlur,
              errors,
              touched,
              validateForm,
            }) => (
              <Form>
                {React.cloneElement(steps[currentStep], {
                  values,
                  handleChange,
                  handleBlur,
                  errors,
                  touched,
                })}
                <FormButtons
                  nextStep={nextStep}
                  previousStep={previousStep}
                  isFirstStep={isFirstStep}
                  isLastStep={isLastStep}
                  validateForm={validateForm}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default MainFormPage;
