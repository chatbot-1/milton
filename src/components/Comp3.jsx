import React from "react";
// import CompOne from "./CompOne";
import img3 from "../assets/img3.png";
import img from "../assets/img.png";
import img2 from "../assets/img2.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import { FiPlus } from "react-icons/fi";

const Comp3 = () => {
  return (
    <div>
      <div className="container mt-[150px]">
        <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row justify-between items-center gap-[50px]">

          <div>
            <div className="rounded-xl bg-white w-[350px] mt-[50px] sm:w-[370px] md:w-[400px] lg:w-[430px] xl:w-[450px] pb-4 ml-[0] sm:ml-[20px] md:ml-[40px] lg:ml-[60px] xl:ml-[100px] border">
              <div className="container">
                <div className="flex w-full justify-between py-[13px] border-b">
                  <div>
                    <p className="text-[10px] font-semibold">
                      Shedules for 4 feb, 2023
                    </p>
                    <p className="text-[9px]">
                      Create and complete tasks using boards
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={img} alt="" className="h-5" />
                    <button className="text-[#7C65D3] bg-[#EEE8FC] rounded-md px-[10px] flex items-center gap-1 text-[10px] py-[1px]">
                      <FiPlus /> Invite
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="container mt-[10px]">
                  <div className="flex gap-6">
                    <p className="text-[9px]">9AM</p>
                    <div className="border-t w-full mt-[8px]">
                      <div className="shadow-sm bg-[#EDEDED] rounded-lg mt-[6px] p-1">
                        <p className="text-[9px] font-semibold">
                          UX testing with senior developer
                        </p>
                        <span className="flex mt-[5px] text-[8px] gap-3 items-center">
                          <img
                            src={img2}
                            alt=""
                            className="h-[15px] w-[15px] border-[2px] rounded-full border-gray-500/50"
                          />
                          9AM - 10Am
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-[8px]">
                    <p className="text-[9px]">10AM</p>
                    <div className="border-t w-full mt-[8px]">
                      <div className="shadow-sm bg-[#E1F5E7] rounded-lg mt-[6px] p-1">
                        <p className="text-[9px] font-semibold">
                          Logo and branding guide for project 2
                        </p>
                        <span className="flex mt-[5px] text-[8px] gap-3 items-center">
                          <img
                            src={img3}
                            alt=""
                            className="h-[15px] w-[15px] border-[2px] rounded-full border-green-500/50"
                          />
                          9AM - 10Am
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex relative gap-4 mt-[15px]">
                    <p className="text-[9px]">11AM</p>
                    <div className="flex w-full border-t mt-[8px] justify-center">
                      <div>
                        <div className="mt-[10px]">
                          <button className="border rounded absolute bottom-0 left-[40%] bg-[#FEF9F6] text-[9px] flex items-center gap-1 px-[10px] shadow-sm py-[3px]">
                            <FiPlus />
                            Add schedules
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-[8px]">
                    <p className="text-[9px]">12PM</p>
                    <div className="border-t w-full mt-[9px]">
                      <div className="bg-[#DAE6FE] shadow-sm rounded-lg mt-[6px] p-1">
                        <p className="text-[9px] font-semibold">
                          Meeting with andria about new UX project
                        </p>
                        <span className="flex mt-[5px] text-[8px] gap-3 items-center">
                          <img
                            src={img4}
                            alt=""
                            className="h-[15px] w-[15px] border-[2px] rounded-full border-indigo-500/50"
                          />
                          9AM - 10Am
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-[8px]">
                    <p className="text-[9px]">01PM</p>
                    <div className="border-t w-full mt-[8px]">
                      <div className="bg-[#FCE2DB] shadow-sm rounded-lg mt-[6px] p-1">
                        <p className="text-[9px] font-semibold">
                          Interview UI design for new SaaS idea
                        </p>
                        <span className="flex mt-[5px] text-[8px] gap-3 items-center">
                          <img
                            src={img5}
                            alt=""
                            className="h-[15px] w-[15px] border-[2px] rounded-full border-gray-500/50"
                          />
                          9AM - 10Am
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex  gap-4 mt-[8px]">
                    <p className="text-[9px]">02PM</p>
                    <div className="border-t w-full mt-[8px]">
                      <div className="bg-[#EDEDED] shadow-sm rounded-lg mt-[6px] p-1">
                        <p className="text-[9px] font-semibold">
                          UX testing with senior developer
                        </p>
                        <span className="flex mt-[5px] text-[8px] gap-3 items-center">
                          <img
                            src={img6}
                            alt=""
                            className="h-[15px] w-[15px] border-[2px] rounded-full border-gray-500/50"
                          />
                          9AM - 10Am
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex relative gap-4 mt-[15px]">
                    <p className="text-[9px]">03PM</p>
                    <div className="flex w-full border-t mt-[12px] justify-center">
                      <div>
                        <div className="mt-[10px]">
                          <button className="border rounded absolute bottom-0 left-[40%] bg-[#FEF9F6] text-[9px] flex items-center shadow-sm gap-1 px-[10px] py-[3px]">
                            <FiPlus />
                            Add schedules
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="bg-[#CCEAFD] w-fit rounded-full font-semibold px-[25px] py-[8px]">Smart Reminders & Task</p>
            <h1 className="text-[40px] mt-[20px] leading-[45px] font-bold">Never miss an important deadline or event again</h1>
            <p className="mt-[50px] text-[#9D9BA3] text-[20px]">
              Never miss an important deadline again with our AI-driven
              notifications. Our app intelligently analyzes your schedule to
              prioritize what's most important, keeping you on track and
              ensuring your day is productive and stress-free.
            </p>
            <div className="flex relative justify-end mt-[100px]">
              <div className="bg-[#2E2E2E] text-white font-bold p-4 mr-[80px] text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] rounded-t-2xl rounded-bl-2xl w-[300px] sm:w-[320px] md:w-[340px] lg:w-[360px] xl:w-[370px] ">
                <p>
                  I love how user-friendly this app is! It's so easy to add
                  events and set reminders!
                </p>
                <p className="mt-[10px] text-[#9D9BA3]">Adam, entrepreneur</p>
              </div>
              <div className="absolute top-[80px]">
                <img src={img5} alt="" className="h-16"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Comp3;
