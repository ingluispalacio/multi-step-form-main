function ThanksStep() {
    return (
        <div className="px-6 py-3 flex flex-col gap-8 pt-10 justify-center items-center h-80 lg:h-120">
            <img src="assets/images/icon-thank-you.svg" alt="thanks" className="h-10 w-10 ss:h-12 ss:w-12 ms:15 ms:w-15  lg:h-20 lg:w-20" />
           
            <div className="flex flex-col gap-3 text-center">
                <h1 className="text-[18px] font-bold lg:text-4xl">Thank you</h1>
                <p className="text-gray-500 text-[14px]  lg:text-lg  ">
                    Thanks for confirming your subscription! We hope you have fun using our platform.
                    If you ever need support, please feel free to email us at support@loremgaming.com
                </p>
            </div>

        </div>
    );
}

export default ThanksStep;