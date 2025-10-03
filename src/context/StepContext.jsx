import { createContext, useContext, useState } from "react";

const StepContext = createContext();

export function StepProvider({ children }) {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: null,
    addons: [],
    billingType: "monthly"
  });

  const arraySteps = [{ title: 'Your info', number: 1 },
  { title: 'Select Plan', number: 2 },
  { title: 'Add-Ons', number: 3 },
  { title: 'summary', number: 4 }];

  const validateStep = () => {
    let newErrors = {};

    switch (step) {
      case 1:
        if (!formData.name) newErrors.name = "This is required";
        if (!formData.email) {
          newErrors.email = "This is required";
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(formData.email)) {
            newErrors.email = "Email is invalid";
          }
        }
        if (!formData.phone) newErrors.phone = "This is required";
        break;

      case 2:
        if (!formData.plan) newErrors.plan = "You must select a plan";
        break;


      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <StepContext.Provider value={{ step, setStep, arraySteps, formData, setFormData, errors, validateStep }}>
      {children}
    </StepContext.Provider>
  );
}

export function useStep() {
  return useContext(StepContext);
}
