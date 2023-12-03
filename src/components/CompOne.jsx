import React from "react";
import img from "../assets/img.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import { FiPlus } from "react-icons/fi";

const CompOne = () => {
  return (
    <div className="rounded-xl w-[630px] pb-4 border">
      <div className="container">
        <div className="flex w-full justify-between py-[13px] border-b">
          <div>
            <p className="text-[15px] font-semibold">
              Shedules for 4 feb, 2023
            </p>
            <p className="text-[14px]">
              Create and complete tasks using boards
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src={img} alt="" className="h-8" />
            <button className="text-[#7C65D3] bg-[#EEE8FC] rounded-md px-[12px] flex items-center gap-1 text-[14px] py-[2px]">
              <FiPlus /> Invite
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="container mt-[15px]">
          <div className="flex gap-6">
            <p className="text-[14px]">9AM</p>
            <div className="border-t w-full mt-[12px]">
              <div className="shadow-sm bg-[#EDEDED] rounded-lg mt-[10px] p-2">
                <p className="text-[13px] font-semibold">
                  UX testing with senior developer
                </p>
                <span className="flex mt-[8px] text-[12px] gap-3 items-center">
                  <img
                    src={img2}
                    alt=""
                    className="h-[20px] w-[20px] border-[2px] rounded-full border-gray-500/50"
                  />
                  9AM - 10Am
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-[12px]">
            <p className="text-[14px]">10AM</p>
            <div className="border-t w-full mt-[12px]">
              <div className="shadow-sm bg-[#E1F5E7] rounded-lg mt-[10px] p-2">
                <p className="text-[13px] font-semibold">
                  Logo and branding guide for project 2
                </p>
                <span className="flex mt-[8px] text-[12px] gap-3 items-center">
                  <img
                    src={img3}
                    alt=""
                    className="h-[20px] w-[20px] border-[2px] rounded-full border-green-500/50"
                  />
                  9AM - 10Am
                </span>
              </div>
            </div>
          </div>

          <div className="flex relative gap-6 mt-[25px]">
            <p className="text-[14px]">11AM</p>
            <div className="flex w-full border-t mt-[12px] justify-center">
              <div>
                <div className="mt-[14px]">
                  <button className="border rounded absolute bottom-0 left-[40%] bg-[#FEF9F6] text-[13px] flex items-center gap-1 px-[10px] shadow-sm py-[3px]">
                    <FiPlus />
                    Add schedules
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-[12px]">
            <p className="text-[14px]">12PM</p>
            <div className="border-t w-full mt-[12px]">
              <div className="bg-[#DAE6FE] shadow-sm rounded-lg mt-[10px] p-2">
                <p className="text-[13px] font-semibold">
                  Meeting with andria about new UX project
                </p>
                <span className="flex mt-[8px] text-[12px] gap-3 items-center">
                  <img
                    src={img4}
                    alt=""
                    className="h-[20px] w-[20px] border-[2px] rounded-full border-indigo-500/50"
                  />
                  9AM - 10Am
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-[12px]">
            <p className="text-[14px]">01PM</p>
            <div className="border-t w-full mt-[12px]">
              <div className="bg-[#FCE2DB] shadow-sm rounded-lg mt-[10px] p-2">
                <p className="text-[13px] font-semibold">
                  Interview UI design for new SaaS idea
                </p>
                <span className="flex mt-[8px] text-[12px] gap-3 items-center">
                  <img
                    src={img5}
                    alt=""
                    className="h-[20px] w-[20px] border-[2px] rounded-full border-gray-500/50"
                  />
                  9AM - 10Am
                </span>
              </div>
            </div>
          </div>

          <div className="flex  gap-6 mt-[12px]">
            <p className="text-[14px]">02PM</p>
            <div className="border-t w-full mt-[12px]">
              <div className="bg-[#EDEDED] shadow-sm rounded-lg mt-[10px] p-2">
                <p className="text-[13px] font-semibold">
                  UX testing with senior developer
                </p>
                <span className="flex mt-[8px] text-[12px] gap-3 items-center">
                  <img
                    src={img6}
                    alt=""
                    className="h-[20px] w-[20px] border-[2px] rounded-full border-gray-500/50"
                  />
                  9AM - 10Am
                </span>
              </div>
            </div>
          </div>

          <div className="flex relative gap-6 mt-[25px]">
            <p className="text-[14px]">03PM</p>
            <div className="flex w-full border-t mt-[12px] justify-center">
              <div>
                <div className="mt-[14px]">
                  <button className="border rounded absolute bottom-0 left-[40%] bg-[#FEF9F6] text-[13px] flex items-center shadow-sm gap-1 px-[10px] py-[3px]">
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
  );
};

export default CompOne;
