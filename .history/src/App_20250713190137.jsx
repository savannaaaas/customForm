import "./App.css";
import { RegistrationForm } from "./components/RegistrationForm";
import { RegisterButton } from "./components/RegisterButton";
function App() {
  return (
    <>
      <RegistrationForm />
      <RegisterButton>Register</RegisterButton>
    </>
  );
}

export default App;
