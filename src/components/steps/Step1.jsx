import { useStep } from "../../context/StepContext";

function Step1() {
    const { formData, setFormData, errors } = useStep();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value, 
        });
    };
    const getInputClass = (field) => {
        if (errors[field]) {
            return "border-red-500 ring-red-400"; 
        }
        if (formData[field]) {
            return "border-indigo-500 ring-indigo-500"; 
        }
        return "border-gray-300 ring-gray-300"; 
    };
    return (
        <div className="p-6 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Personal info</h1>
        <p className="text-gray-500 mb-4">Please provide your name, email address, and phone number.</p>
        <form action="" className="flex flex-col gap-2">
            <div className="flex flex-col gap">
                <div className="flex justify-between">
                    <label htmlFor="name" >Name</label>
                    {errors.name && <p className="text-red-500 text-sm font-bold">{errors.name}</p>}
                </div>
                <input 
                id="name"
                type="text" 
                placeholder="e.g. Stephen King" 
                value={formData.name || ""}  
                onChange={handleChange} 
                className={`outline-none py-2 px-4 border border-gray-300 ring ring-gray-300 rounded-xs lg:rounded-lg ${getInputClass("name")}`} 
                />
                
            </div>
             <div className="flex flex-col gap">
                <div className="flex justify-between">
                    <label htmlFor="email">Email Address</label>
                    {errors.email && <p className="text-red-500 text-sm font-bold">{errors.email}</p>}
                </div>
                
                <input 
                id="email"
                type="email" 
                placeholder="e.g. stephenking@lorem.com" 
                value={formData.email || ""}  
                onChange={handleChange} 
                className={`outline-none py-2 px-4 border border-gray-300 ring ring-gray-300 rounded-xs lg:rounded-lg ${getInputClass("email")}`} 
                />
                
            </div>
            <div className="flex flex-col gap">
                <div className="flex justify-between">
                    <label htmlFor="phone">Phone Number</label>
                    {errors.phone && <p className="text-red-500 text-sm font-bold">{errors.phone}</p>}
                </div>
                
                <input 
                id="phone"
                type="text" 
                placeholder="e.g. +1 234 567 890" 
                value={formData.phone || ""}  
                onChange={handleChange} 
                className={`outline-none py-2 px-4 border border-gray-300 ring ring-gray-300 rounded-xs lg:rounded-lg ${getInputClass("phone")}`} 
                />
                
            </div>
        </form>
        </div>
    );
}

export default Step1;