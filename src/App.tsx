import "./App.css";
import FormPage from "./pages/form-page";
import WelcomePage from "./pages/welcome-page";
import { useUIStore } from "./store/uiStore";

function App() {
  const { componentVisible } = useUIStore();
  return (
    <>
      {componentVisible === "welcomePage" && <WelcomePage />}
      {componentVisible === "formPage" && <FormPage />}
    </>
  );
}

export default App;
