import React from "react";
import img5 from "../assets/img5.png"

const Comp11 = () => {
  return (
    <div>
      <div className="mt-[150px]">
        <div>
          <div>
            <p className="text-center py-[7px] px-[28px] w-fit m-auto rounded-full mb-[10px] bg-[#F1F2F4] text-[17px] font-semibold">
              Last call Baby! 🚀
            </p>
            <h1 className="text-[40px] sm:text-[45px] md:text-[50px] lg:text-[55px] xl:text-[60px] mb-[100px] text-[#2E2E2E] text-center w-[350px] sm:w-[550px] md:w-[600px] lg:w-[700px] xl:w-[900px] leading-[45px] sm:leading-[50px] md:leading-[55px] lg:leading-[60px] xl:leading-[65px] m-auto font-bold">
              Ready to start?
            </h1>
          </div>
          <div className="text-center w-[350px] sm:w-[400px] md:w-[450px] lg:w-[550px] xl:w-[650px] m-auto">
            <p className="text-[23px]">
              Here is your last chance to explain how cool your app is. Focus on
              the benefits for your users, not on the features.{" "}
            </p>
          </div>
          <div className="flex justify-center mt-[30px]">
            <button className="bg-[#2E2E2E] text-[18px] flex justify-center py-[12px] px-[28px] rounded-xl text-white font-semibold">
              Get Started, it's free
            </button>
          </div>

          <div className="flex relative justify-center mt-[40px]">
              <div className="bg-[#FEE9CB] text-[#2E2E2E] font-bold p-4 mr-[80px] text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] rounded-t-2xl rounded-bl-2xl w-[300px] sm:w-[320px] md:w-[340px] lg:w-[360px] xl:w-[370px]">
                <p>
                I never missed a call again, the AI-drivenfeature is a game changer for me! 
                </p>
                <p className="mt-[10px] text-[#6B6B78]">Adam, Solo founder</p>
              </div>
              <div className="absolute top-[80px] left-[79%] sm:left-[69%] md:left-[59%] lg:left-[49%] xl:left-[29%]">
                <img src={img5} alt="" className="h-16"/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Comp11;
