
import HeaderStep from "./steps/HeaderStep";
import BodyStep from "./steps/BodyStep";
import FooterStep from "./steps/FooterStep";
import { StepProvider } from "../context/StepContext";

function Main() {
    return (
        <StepProvider>
            <div className="flex flex-col h-screen w-full lg:flex-row lg:h-130 lg:w-[65%] xl:w-[55%] lg:shadow-xl lg:bg-white lg:p-4 lg:rounded-xl">
                <HeaderStep />
                <div className="flex flex-col w-full h-full">
                    <BodyStep />
                    <FooterStep  />
                </div>                
            </div>
        </StepProvider>
    );
}

export default Main;