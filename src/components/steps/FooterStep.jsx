import { useStep } from "../../context/StepContext";


function FooterStep() {
    const { step, setStep } = useStep();
    const next = () => { setStep(prev => prev + 1) };
    const previous = () => { setStep(prev => (prev > 1 ? prev - 1 : 1)) };
    return (
        <div className="flex justify-between items-center py-4 px-2 bg-white text-sm lg:mt-auto" >
            <button 
            key="btn-step-back"
            onClick={previous}
            className={`${step<2 ? 'opacity-0': 'opacity-100' } py-2 px-4 text-gray-400 rounded-[4px] !bg-transparent`}>Go Back</button>
            <button 
            key="btn-step-next"
            onClick={next}
            className="py-2 px-4 text-white rounded-[4px]">Next Step</button>
        </div>
    );
}
export default FooterStep;