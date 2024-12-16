import { Field } from "formik";
import FormWrapper from "../../layouts/form-wrapper";
import { InputFieldType } from "../../types/InputField";
import { Input } from "antd";
import ErrorMessageForm from "../error-message";
import DateRangePicker from "../ui/range-picker";
import { useUIStore } from "../../store/uiStore";

const ExperienceInfoForm = () => {
  const { setDateRange } = useUIStore();
  const experienceFormArray: InputFieldType[] = [
    {
      name: "organization",
      label: "Organization",
      type: "text",
      placeholder: "enter your organization",
    },
    {
      name: "positionTwo",
      label: "Position",
      type: "text",
      placeholder: "enter your Position",
    },
    {
      name: "descriptionOne",
      label: "Description",
      type: "text",
      placeholder: "enter your description",
    },
  ];
  return (
    <FormWrapper title="Experience Info">
      <div className="flex flex-col gap-5">
        {experienceFormArray.map((input, index) => (
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
          <DateRangePicker setDateRange={setDateRange} />
        </div>
      </div>
    </FormWrapper>
  );
};

export default ExperienceInfoForm;
