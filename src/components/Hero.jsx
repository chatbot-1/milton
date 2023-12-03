import React from "react";
import { FaStar } from "react-icons/fa";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"

const Hero = () => {
  return (
    <div className="mt-[120px]">
      <div className="">
        <div className="container flex-col justify-center items-center text-center">
          <div className="text-[#2E2E2E]">
            <p className="text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] font-semibold w-fit m-auto px-[15px] py-[4px] rounded-2xl bg-[#F1F2F4]">
              An other way to manage time
            </p>
            <h1 className="text-[45px] sm:text-[62px] md:text-[72px] lg:text-[72px] xl:text-[82px] leading-[70px] xl:leading-[90px] font-bold w-[350px] sm:w-[450px] md:w-[600px] lg:w-[700px] xl:w-[800px]  m-auto">
              Your new favorite calendar <span className="text-[45px]">🗓️</span>{" "}
              app
            </h1>
            <p className="w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] mt-[30px] m-auto text-[18px] sm:text-[19px] md:text-[19px] lg:text-[20px] xl:text-[20px] text-[#6B6B78] font-semibold">
              Here you should explain how cool your app is. Remember, focus on
              the benefits for your users, not on the features.
            </p>
          </div>
          <div className="mt-[30px]">
            <button className="bg-[#2E2E2E] text-white px-[30px] py-[15px] font-semibold rounded-xl text-[16px] sm:text-[17px] md:text-[17px] lg:text-[18px] xl:text-[18px]">
              Get started, it's free
            </button>
            <p className="text-[#6B6B78] text-[13px] mt-[5px]">
              Free 14 days trials,no credit card needed
            </p>
          </div>
          <div className="flex justify-center gap-2 mt-[30px] items-center">
            <div>
              <div className="flex">
                <span><img src={img1} alt="" className="h-[40px] w-[40px] bg-[#BEEFC8] rounded-full p-1 border-white border-[2px]"/></span>
                <span><img src={img2} alt="" className="h-[40px] w-[40px] bg-[#F9D59E] rounded-full p-1 border-white border-[2px]"/></span>
                <span><img src={img3} alt="" className="h-[40px] w-[40px] bg-[#DAD1FB] rounded-full p-1 border-white border-[2px]"/></span>
                <span><img src={img4} alt="" className="h-[40px] w-[40px] bg-[#BEEFC8] rounded-full p-1 border-white border-[2px]"/></span>
                <span><img src={img5} alt="" className="h-[40px] w-[40px] bg-[#DAD1FB] rounded-full p-1 border-white border-[2px]"/></span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="flex text-[18px] justify-center items-center gap-1 text-[#FFD700]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="font-semibold">5.0</p>
              </div>
              <p className="text-[13px] font-semibold text-[#2E2E2E]">
                From 200+ happy users
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
