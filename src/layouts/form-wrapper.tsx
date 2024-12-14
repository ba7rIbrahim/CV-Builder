import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};
const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <div className="border-b px-6">
        <h2 className="py-4">{title}</h2>
      </div>
      <div className="flex flex-col p-6 justify-end gap-4">{children}</div>
    </>
  );
};

export default FormWrapper;
