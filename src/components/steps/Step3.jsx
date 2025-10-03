import { useStep } from "../../context/StepContext";

const addonsList = [
  { title: "Online Services", description: "Access to multiplayer games", mount_price: 1, year_price: 10 },
  { title: "Large Storage", description: "Extra 1TB of cloud save", mount_price: 2, year_price: 20 },
  { title: "Customizable Profile", description: "Custom theme on your profile", mount_price: 2, year_price: 20 },
];

function Step3() {
  const { formData, setFormData } = useStep();

  const handleSelectAddons = (addon) => {
    const exists = formData.addons.find((a) => a.title === addon.title);

    let newAddons;
    if (exists) {
      newAddons = formData.addons.filter((a) => a.title !== addon.title);
    } else {
      newAddons = [...formData.addons, addon];
    }

    setFormData({
      ...formData,
      addons: newAddons,
    });
  };

  const renderCardAddons = (a) => {
    const isActive = formData.addons.some((item) => item.title === a.title);

    return (
      <div
        key={a.title}
        className={`flex gap-2 items-center p-2 border rounded-lg xl:p-4 cursor-pointer transition
          ${isActive
            ? "border-[#5C57F2] bg-[#5C57F2]/10"
            : "border-gray-400 hover:border-[#5C57F2] hover:bg-[#5C57F2]/5"}
        `}
      >
        <div className="w-[15%] flex justify-center items-center">
          <input
            type="checkbox"
            checked={isActive}
            onChange={() => handleSelectAddons(a)}
            className="w-5 h-5 accent-[#5C57F2] cursor-pointer"
          />
        </div>
        <div className="w-[65%]">
          <label className="font-semibold text-[14px] ss:text-[16px] xl:text-lg">{a.title}</label>
          <p className="font-semibold text-gray-400 text-[8px] ss:text-[10px] xl:text-xs">{a.description}</p>
        </div>
        <div className="w-[20%]">
          <p className="text-[#5C57F2]">
            {formData.billingType === "monthly"
              ? `$${a.mount_price}/mo`
              : `$${a.year_price}/yr`}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="px-6 py-3 flex flex-col gap-2">
      <h1 className="text-[18px] font-bold lg:text-2xl">Pick add-ons</h1>
      <p className="text-gray-500 text-[14px] lg:mb-6 lg:text-lg">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="flex flex-col gap-3  lg:mb-4">
        {addonsList.map((a) => renderCardAddons(a))}
      </div>
    </div>
  );
}

export default Step3;
