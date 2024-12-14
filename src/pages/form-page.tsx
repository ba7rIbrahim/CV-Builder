import { Button } from "antd";
import { useUIStore } from "../store/uiStore";

const FormPage = () => {
  const { toggleComponent } = useUIStore();
  return (
    <div>
      FormPage
      <Button onClick={toggleComponent}>Prev</Button>
    </div>
  );
};

export default FormPage;
