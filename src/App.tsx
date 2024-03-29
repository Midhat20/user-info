import { useState } from "react";
import "./styles.css";
import UserDetails from "./components/userDetails";
import UserFamilyDetails from "./components/userFamilyDetails";
import UserInfo from "./components/userInfo";

const steps = [UserDetails, UserFamilyDetails, UserInfo];

export default function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    fatherName: "",
    motherName: "",
    phoneNumber: "",
    address: "",
    familyMembers: [],
  });
  const handleNext = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };
  const CurrentStep = steps[step];
  return (
    <div className="App">
      <CurrentStep onNext={handleNext} formData={formData} />
    </div>
  );
}
