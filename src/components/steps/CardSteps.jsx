import { useStep } from "../../context/StepContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ThanksStep from "./ThanksStep";

function CardSteps() {
    const { step } = useStep();
    return (
        <div className="shadow-xl mx-4 rounded-md -mt-17 bg-white md:mx-50 lg:mt-0 lg:shadow-none lg:mx-10 xl:20">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}          
          {step === 5 && <ThanksStep />}          
        </div>
    );
}
export default CardSteps;