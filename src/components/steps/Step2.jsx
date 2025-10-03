import { useStep } from "../../context/StepContext";

const plans = [
  { title: "Arcade", icon_name: "icon-arcade.svg", mount_price: 9, year_price: 90 },
  { title: "Advanced", icon_name: "icon-advanced.svg", mount_price: 12, year_price: 120 },
  { title: "Pro", icon_name: "icon-pro.svg", mount_price: 15, year_price: 150 },
];

function Step2() {
  const { formData, setFormData, errors } = useStep();

  const handleSelectPlan = (plan) => {
    setFormData({
      ...formData,
      plan,
    });
  };

  const toggleBilling = () => {
    setFormData({
      ...formData,
      billingType: formData.billingType === "monthly" ? "yearly" : "monthly",
    });
  };

  const renderCardPlan = (plan) => {
    const isActive = formData.plan?.title === plan.title;

    return (
      <div
        key={plan.title}
        onClick={() => handleSelectPlan(plan)}
        className={`flex gap-2 items-center p-2 border rounded-lg lg:flex-col lg:items-start lg:gap-6 lg:w-35 lg:h-40 lg:p-4 cursor-pointer transition
          ${isActive
            ? "border-[#514C97] bg-[#514C97]/10"
            : "border-gray-400 hover:border-[#514C97] hover:bg-[#514C97]/5"}
        `}
      >
        <div className="w-10 h-full">
          <img src={`assets/images/${plan.icon_name}`} alt={plan.title} />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">{plan.title}</label>
          <p className="text-gray-400">
            {formData.billingType === "monthly"
              ? `$${plan.mount_price}/mo`
              : `$${plan.year_price}/yr`}
          </p>
          <label
            className={`text-xs transition ${
              formData.billingType === "yearly" ? "opacity-100" : "opacity-0"
            }`}
          >
            2 months free
          </label>
        </div>
      </div>
    );
  };

  return (
    <div className="px-6 py-3 flex flex-col gap-2">
      <h1 className="text-[18px] font-bold lg:text-2xl">Select your plan</h1>
      <p className="text-gray-500 text-[14px] lg:mb-6">You have the option of monthly or yearly billing.</p>

      <div className="flex flex-col gap-3 lg:flex-row lg:mb-4">
        {plans.map((plan) => renderCardPlan(plan))}
      </div>

      <div className="flex justify-around items-center px-4 py-2 bg-[#BFE0FF]/20 rounded-xl">
        <label className={`text-xs font-semibold transition ${
              formData.billingType === "monthly" ? "!text-gray-400" : ""
            }`}>Monthly</label>

        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={formData.billingType === "yearly"}
            className="sr-only peer"
            onChange={toggleBilling}
          />
          <div
            className="relative w-11 h-6 bg-gray-200 rounded-full 
              peer peer-checked:bg-[#0c2a56]
              after:content-[''] after:absolute after:top-[2px] after:left-[2px]
              after:bg-white after:rounded-full after:w-5 after:h-5 after:transition-all
              peer-checked:after:translate-x-full"
          ></div>
        </label>

        <label className={`text-xs font-semibold transition ${
              formData.billingType === "yearly" ? "!text-gray-400" : ""
            }`}>Yearly</label>
      </div>
      {errors.plan && <p className="text-red-500 text-sm font-bold">{errors.plan}</p>}
    </div>
  );
}

export default Step2;
