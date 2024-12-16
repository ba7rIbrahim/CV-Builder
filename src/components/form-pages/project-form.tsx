import { Input } from "antd";
import FormWrapper from "../../layouts/form-wrapper";
import { InputFieldType } from "../../types/InputField";
import ErrorMessageForm from "../error-message";
import { Field } from "formik";

const ProjectInfoForm = () => {
  const projectFormArray: InputFieldType[] = [
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "enter your title",
    },
    {
      name: "link",
      label: "Link",
      type: "text",
      placeholder: "enter your link",
    },
    {
      name: "descriptionTwo",
      label: "Description",
      type: "text",
      placeholder: "enter your description",
    },
  ];
  return (
    <FormWrapper title="Project Info">
      <div className="flex flex-col gap-5">
        {projectFormArray.map((input, index) => (
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
      </div>
    </FormWrapper>
  );
};

export default ProjectInfoForm;
