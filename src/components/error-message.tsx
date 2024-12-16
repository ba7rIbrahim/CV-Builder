import { ErrorMessage } from "formik";

interface ErrorMessageFormProps {
  name: string;
}

const ErrorMessageForm: React.FC<ErrorMessageFormProps> = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => <p className="text-red-600">{msg}</p>}
    </ErrorMessage>
  );
};

export default ErrorMessageForm;
