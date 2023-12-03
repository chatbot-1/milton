import React, { useState } from "react";
import Monthly from "./comp9/Monthly";
import Annually from "./comp9/Annually";
// import { IoMdCheckmark } from "react-icons/io";

const Comp9 = () => {
  const [tab, setTab] = useState("monthly");

  return (
    <div className="container mt-[150px]">
      <div>
        <div>
          <p className="text-center py-[7px] px-[28px] w-fit m-auto rounded-full mb-[10px] bg-[#F1F2F4] text-[17px] font-semibold">
            Pricing and plans 💰
          </p>
          <h1 className="text-[40px] sm:text-[45px] md:text-[50px] lg:text-[55px] xl:text-[60px] mb-[100px] text-[#2E2E2E] text-center w-[350px] sm:w-[550px] md:w-[600px] lg:w-[700px] xl:w-[900px] leading-[45px] sm:leading-[50px] md:leading-[55px] lg:leading-[60px] xl:leading-[65px] m-auto font-bold">
            Find the best plan for your needs
          </h1>
        </div>
        <div>
        
          <div className="relative">
            <div className="flex justify-center text-[#2E2E2E] text-[18px] font-semibold bg-[#F3F3F3] w-fit p-1 m-auto rounded-xl gap-2 mb-[40px]">
              <button
                onClick={() => setTab("monthly")}
                className={`${
                  tab === "monthly" &&
                  "bg-white py-[6px] px-[20px]  shadow-md w-[150px] m-auto rounded-xl ease-out duration-500 origin-top"
                } py-[6px] px-[20px] w-[150px] m-auto`}
              >
                Montly
              </button>
              <button
                onClick={() => setTab("annually")}
                className={`${
                    tab === "annually" &&
                    "bg-white py-[6px] px-[20px]  shadow-md w-[150px] m-auto rounded-xl ease-out duration-500 origin-top"
                  } py-[6px] px-[20px] w-[150px] m-autos`}
              >
                Annually
              </button>
            </div>
            <div className="absolute top-[100%] sm:top-[80%] md:top-[62%] lg:top-[42%] xl:top-[22%] left-[64%]">
              <p>✨ save 30%</p>
            </div>
          </div>

          {tab === "monthly" && <Monthly />}
          {tab === "annually" && <Annually />}

        </div>
      </div>
    </div>
  );
};

export default Comp9;
