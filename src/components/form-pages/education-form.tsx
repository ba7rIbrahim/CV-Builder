import { Input } from "antd";
import FormWrapper from "../../layouts/form-wrapper";
import { InputFieldType } from "../../types/InputField";
import ErrorMessageForm from "../error-message";
import { Field } from "formik";
import DateRangePicker from "../ui/range-picker";
import DatePickerYearsCollege from "../ui/picker-years-collage";

const EducationInfoForm = () => {
  const educationFormArray: InputFieldType[] = [
    {
      name: "college",
      label: "College",
      type: "text",
      placeholder: "enter your college",
    },
    {
      name: "qualification",
      label: "Qualifications",
      type: "text",
      placeholder: "enter your qualification",
    },
    {
      name: "descriptionThree",
      label: "Description",
      type: "text",
      placeholder: "enter your description",
    },
  ];
  return (
    <FormWrapper title="Education Info">
      <div className="flex flex-col gap-5">
        {educationFormArray.map((input, index) => (
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
          <DatePickerYearsCollege />
        </div>
      </div>
    </FormWrapper>
  );
};

export default EducationInfoForm;
