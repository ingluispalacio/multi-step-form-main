import { useStep } from "../../context/StepContext";

function Step1() {
    const { formData, setFormData } = useStep();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value, 
        });
    };
    return (
        <div className="p-6 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Personal info</h1>
        <p className="text-gray-500 mb-4">Please provide your name, email address, and phone number.</p>
        <form action="" className="flex flex-col gap-2">
            <div className="flex flex-col gap">
                <label htmlFor="name" >Name</label>
                <input 
                id="name"
                type="text" 
                placeholder="e.g. Stephen King" 
                value={formData.name || ""}  
                onChange={handleChange} 
                className="outline-none py-2 px-4 border border-gray-300 rounded-xs focus:ring focus:ring-[#0c2a56]"/>
            </div>
             <div className="flex flex-col gap">
                <label htmlFor="email">Email Address</label>
                <input 
                id="email"
                type="email" 
                placeholder="e.g. stephenking@lorem.com" 
                value={formData.email || ""}  
                onChange={handleChange} 
                className="outline-none py-2 px-4 border border-gray-300 rounded-xs focus:ring focus:ring-[#0c2a56]"/>
            </div>
            <div className="flex flex-col gap">
                <label htmlFor="phone">Phone Number</label>
                <input 
                id="phone"
                type="text" 
                placeholder="e.g. +1 234 567 890" 
                value={formData.phone || ""}  
                onChange={handleChange} 
                className="outline-none py-2 px-4 border border-gray-300 rounded-xs focus:ring focus:ring-[#0c2a56]"/>
            </div>
        </form>
        </div>
    );
}

export default Step1;