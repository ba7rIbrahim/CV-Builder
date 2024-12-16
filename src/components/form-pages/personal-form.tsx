import { Field } from "formik";
import FormWrapper from "../../layouts/form-wrapper";
import { Input } from "antd";
import ErrorMessageForm from "../error-message";
import ImageUpload from "../ui/image-upload";
import { InputFieldType } from "../../types/InputField";
const PersonalInfoForm = () => {
  const personalFormArray: InputFieldType[] = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "enter your name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "enter your email",
    },
    {
      name: "mobile",
      label: "Mobile",
      type: "text",
      placeholder: "enter your mobile",
    },
    {
      name: "street",
      label: "Street",
      type: "text",
      placeholder: "enter your street",
    },
    {
      name: "city",
      label: "City",
      type: "text",
      placeholder: "enter your city",
    },
    {
      name: "country",
      label: "Country",
      type: "text",
      placeholder: "enter your country",
    },
    {
      name: "linkedin",
      label: "Linkedin",
      type: "text",
      placeholder: "enter your linkedin",
    },
    {
      name: "github",
      label: "Github",
      type: "text",
      placeholder: "enter your github",
    },
    {
      name: "positionOne",
      label: "Position",
      type: "text",
      placeholder: "enter your position",
    },
    {
      name: "skills",
      label: "Skills",
      type: "text",
      placeholder: "enter your skills",
    },
  ];

  return (
    <FormWrapper title="personal Info">
      <div className="flex flex-col gap-5">
        {personalFormArray.map((input, index) => (
          <div key={index} className="flex flex-col p-2 gap-2 items-start">
            <label htmlFor={input.name}>{input.label}</label>
            <div className="flex flex-col w-full flex-grow max-h-[32px]">
              <Field
                id={input.name}
                type={input.type}
                name={input.name}
                as={Input}
                placeholder={input.placeholder}
                className="w-full border border-border text-sm rounded-sm py-1"
              />
              <ErrorMessageForm name={input.name} />
            </div>
          </div>
        ))}
        <div className="px-2 mt-2">
          <ImageUpload />
        </div>
      </div>
    </FormWrapper>
  );
};

export default PersonalInfoForm;
