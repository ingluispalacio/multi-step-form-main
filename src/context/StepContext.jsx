import { createContext, useContext, useState } from "react";

const StepContext = createContext();

export function StepProvider({ children }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: null,  
    billingType: "monthly"
  });
  return (
    <StepContext.Provider value={{ step, setStep, formData, setFormData }}>
      {children}
    </StepContext.Provider>
  );
}

export function useStep() {
  return useContext(StepContext);
}
