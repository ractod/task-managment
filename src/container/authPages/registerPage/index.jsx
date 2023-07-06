import { useState } from "react";
// components
import CompleteStep from "./CompleteStep";
import RegisterStep from "./RegisterStep";

const RegisterPageContainer = () => {
   const [step, setStep] = useState(1);

   const steps = {
      1: <RegisterStep setStep={setStep} />,
      2: <CompleteStep />,
   };

   return steps[step];
};

export default RegisterPageContainer;
