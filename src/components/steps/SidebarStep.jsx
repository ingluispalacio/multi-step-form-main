import { useStep } from "../../context/StepContext";


function SidebarStep() {
    const { step, arraySteps } = useStep();
    return (
        <div className="bg-[url(/assets/images/bg-sidebar-mobile.svg)]  w-full h-40 
     lg:bg-[url(/assets/images/bg-sidebar-desktop.svg)] lg:w-50 xl:60 lg:h-full lg:rounded-lg  bg-no-repeat 
    bg-cover bg-center flex justify-center lg:justify-start items-start text-white md:text-lg lg:px-6">
            <div className="flex gap-3 mt-6 ss:gap-4 ss:mt-7 md:gap-8  lg:gap-6 lg:flex-col">
                {
                    arraySteps.map((element) => {
                        return (
                            <div
                             key={`step-${element.number}`}
                             className="flex gap-3 justinfy-center">
                                <button
                                    key={`btn-step-${element.number}`}
                                    className={`btn-step ${element.number === step || (step > arraySteps.length && element.number === arraySteps.length)
                                            ? 'active'
                                            : ''
                                        }`}>
                                    {element.number}
                                </button>
                                <div className="hidden text-xs lg:flex flex-col uppercase ">
                                    <label className="!text-[#BFE0FF]">STEP {element.number}</label>
                                    <label className="!text-white font-bold">{element.title}</label>
                                </div>
                            </div>
                        )


                    })
                }
            </div>
        </div>
    );
}

export default SidebarStep;