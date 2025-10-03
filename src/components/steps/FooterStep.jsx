import { useStep } from "../../context/StepContext";


function FooterStep() {
    const { step, setStep, arraySteps, validateStep } = useStep();
    const handleNext = () => { if(validateStep()) setStep(prev => prev + 1) };
    const handlePrevious = () => { setStep(prev => (prev > 1 ? prev - 1 : 1)) };

    const labelBtnbutton = arraySteps.length == step ? 'Confirmin' : 'Next Step';

    return (
        <div className={`${arraySteps.length < step ? 'hidden':'flex' } justify-between items-center py-4 px-2 bg-white text-sm lg:mt-auto lg:mx-10 xl:20`} >
            <button 
            key="btn-step-back"
            onClick={handlePrevious}
            className={`${step<2 ? 'opacity-0': 'opacity-100' } cursor-pointer py-2 px-4 text-gray-400 rounded-[4px] 
            !bg-transparent hover:!text-[#0c2a56] hover:font-bold transition-all duration-200`}>Go Back</button>
            <button 
            key="btn-step-next"
            onClick={handleNext}
            className="cursor-pointer py-2 px-4 text-white rounded-[4px] hover:!bg-[#5C57F2] transition-all duration-300">{labelBtnbutton}</button>
        </div>
    );
}
export default FooterStep;