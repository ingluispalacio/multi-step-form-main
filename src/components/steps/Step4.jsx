import { useStep } from "../../context/StepContext";

function Step4() {
    const { formData , setStep} = useStep();
    
    let price_plan = `$${formData.plan.mount_price}/mo`;
    let total =formData.plan.mount_price;
    if (formData.billingType==='yearly') {
        price_plan = `$${formData.plan.year_price}/yr`;
        total =formData.plan.year_price;
    }
    return (
        <div className="px-6 py-3 flex flex-col gap-2 pt-10">
            <h1 className="text-[18px] font-bold lg:text-2xl">Finishing up</h1>
            <p className="text-gray-500 text-[14px] lg:mb-6 lg:text-lg w-[80%] mb-4">
                Double-check everithing look OK before confirming.
            </p> 
            <div className="flex flex-col justify-around items-center px-4 py-2 lg:px-6 lg:py-3 bg-[#BFE0FF]/20 rounded-xl ">
                <div className="flex justify-between  w-full items-center">
                    <div className="flex flex-col text-[14px] lg:text-[18px] ">
                        <label className="font-semibold capitalize  ">{formData.plan.title} ({formData.billingType})</label>
                        <a className="text-gray-400 underline hover:text-[#5C57F2] cursor-pointer" onClick={()=>{setStep(2)}}>Change</a>
                    </div>
                    <label className=" text-[14px] font-semibold">{price_plan}</label>
                </div>
                <div className="flex-grow border-t border-gray-300 w-full mb-4 mt-2"></div>
                {
                    formData.addons.map((a)=>{
                        let price =a.mount_price;
                        let price_label =`${a.mount_price}/mo`;
                        if (formData.billingType==='yearly') {
                            price =a.year_price;
                            price_label = `${a.year_price}/yr`;
                        }
                        total+=price;
                        return (
                            <div className="flex justify-between w-full text-[14px] lg:text-[18px]">
                                <p className="text-gray-400">{a.title}</p>
                                <label className="text-gray-400">+${price_label}</label>
                            </div>
                            );
                    })
                }
               
            </div>
              <div className="flex justify-between w-full text-[14px] lg:text-[18px] px-4 my-4 lg:px-6">
                    <p className="text-gray-400">Total (per {formData.billingType==='yearly' ? 'year': 'mount'})</p>
                    <p className="text-[#5C57F2] font-semibold">{formData.addons.length >0 ?'+$' : '$'}{formData.billingType==='yearly' ? `${total}/yr`: `${total}/mo`}</p>
                </div> 
        </div>
    );
}

export default Step4;