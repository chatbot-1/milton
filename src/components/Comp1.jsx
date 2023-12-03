import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { LuCalendar } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { IoIosSwap } from "react-icons/io";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { TbSettings2 } from "react-icons/tb";
import { AiOutlineSend } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { IoVideocam } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { LuDot } from "react-icons/lu";
import img from "../assets/img.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import comp1 from "../assets/comp1.png";

const Comp1 = () => {
  return (
    <div>
      <div className="container">
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block">
          <div className="flex border rounded-xl">
            <div className="w-[220px] rounded-tl-xl rounded-bl-xl bg-[#F9F9F9] border-r p-3">
              <div className="mb-[30px]">
                <span className="flex text-[20px] font-semibold items-center gap-2">
                  <BsLightningChargeFill />
                  Superpage
                </span>
              </div>

              <div className="flex flex-col text-[14px] gap-2">
                <div className="flex font-semibold px-[15px] py-[5px] rounded-md bg-[#EDEDED] gap-2 items-center">
                  <span className="text-[18px]">
                    <LuCalendar />
                  </span>
                  <p>Calender</p>
                </div>
                <div className="flex px-[15px] py-[5px] gap-2 items-center">
                  <span className="text-[18px]">
                    <GoPeople />
                  </span>
                  <p>Contacts</p>
                </div>
                <div className="flex px-[15px] py-[5px] gap-2 items-center">
                  <span className="text-[18px]">
                    <IoIosSwap />
                  </span>
                  <p>Integration</p>
                </div>
                <div className="flex px-[15px] py-[5px] gap-2 items-center">
                  <span className="text-[18px]">
                    <AiOutlineSend />
                  </span>
                  <p>Refer friends</p>
                </div>
                <div className="flex px-[15px] py-[5px] gap-2 items-center">
                  <span className="text-[18px]">
                    <PiCurrencyDollarSimple />
                  </span>
                  <p>Pricing</p>
                </div>
                <div className="flex px-[15px] py-[5px] gap-2 items-center">
                  <span className="text-[18px]">
                    <TbSettings2 />
                  </span>
                  <p>Settings</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex text-[15px] px-[35px] py-[10px] border-b w-full items-center justify-between">
                <div className="flex items-center font-semibold gap-3">
                  <p>4 February 2023</p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
                <div className="text-[14px]">
                  <ul className="flex gap-6 items-center">
                    <li className="text-[#7C65D3] bg-[#EEE8FC] rounded-md px-[12px] font-semibold py-[2px]">
                      Day
                    </li>
                    <li>Week</li>
                    <li>Month</li>
                    <li>Year</li>
                  </ul>
                </div>

                <div className="flex gap-2 items-center">
                  <button className="flex border px-[6px] py-[4px] rounded-lg gap-1 items-center">
                    <IoIosArrowBack />
                    Today
                    <IoIosArrowForward />
                  </button>
                  <button className="flex border px-[10px] py-[4px] rounded-lg bg-[#2E2E2E] text-white gap-1 items-center">
                    <FiPlus />
                    Add
                  </button>
                  <p className=" flex items-center justify-center font-semibold bg-[#EBDECC] h-[30px] w-[30px] rounded-full">
                    S
                  </p>
                </div>
              </div>

              <div className="p-5 w-full justify-between flex">
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

                <div className="w-[315px]">
                  <div className="flex w-full flex-col gap-4">
                    <div className="border rounded-xl p-4">
                      <p>Today Meetings</p>
                      <div className="mt-[20px]">
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 items-center">
                            <img
                              src={img7}
                              alt=""
                              className="h-[30px] w-[30px] rounded-full border-solid border-[2px] border-gray-700/30"
                            />
                            <div>
                              <p className="text-[12px] font-semibold">
                                Logo and branding guide for UX...
                              </p>
                              <p className="text-[11px]">11:15Am - 12:30PM</p>
                            </div>
                          </div>
                          <span className="h-[25px] w-[25px] text-white bg-gray-500/50 text-[15px] flex justify-center items-center rounded-full">
                            <IoVideocam />
                          </span>
                        </div>

                        <div className="flex justify-between mt-[20px] items-center">
                          <div className="flex gap-2 items-center">
                            <img
                              src={img4}
                              alt=""
                              className="h-[30px] w-[30px] rounded-full border-solid border-[2px] border-gray-700/30"
                            />
                            <div>
                              <p className="text-[12px] font-semibold">
                                UX research with new Saas
                              </p>
                              <p className="text-[11px]">11:15Am - 12:30PM</p>
                            </div>
                          </div>
                          <span className="h-[25px] w-[25px] text-white bg-indigo-500 text-[15px] flex justify-center items-center rounded-full">
                            <IoVideocam />
                          </span>
                        </div>

                        <div className="flex justify-between mt-[20px] items-center">
                          <div className="flex gap-2 items-center">
                            <img
                              src={img2}
                              alt=""
                              className="h-[30px] w-[30px] rounded-full border-solid border-[2px] border-gray-700/30"
                            />
                            <div>
                              <p className="text-[12px] font-semibold">
                                Meet with developers about UI...
                              </p>
                              <p className="text-[11px]">11:15Am - 12:30PM</p>
                            </div>
                          </div>
                          <span className="h-[25px] w-[25px] text-white bg-gray-500/50 text-[15px] flex justify-center items-center rounded-full">
                            <IoVideocam />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-xl p-4">
                      <div>
                        <div>
                          <p className="font-semibold">Upcoming tasks</p>

                          <div className="flex justify-between">
                            <div className="flex gap-3">
                              <input type="checkbox" checked />
                              <div className="mt-[16px]">
                                <p className="text-[12px] font-semibold">
                                  UX testing with Senior developer...
                                </p>
                                <p className="flex gap-2 text-[12px] items-center">
                                  <CiCalendar />
                                  30 Aug 2022 - 11:30Am
                                </p>
                              </div>
                            </div>
                            <span className="text-[25px]">...</span>
                          </div>

                          <div className="flex justify-between mt-[10px]">
                            <div className="flex gap-3">
                              <input type="checkbox" />
                              <div className="mt-[16px]">
                                <p className="text-[12px] font-semibold">
                                  UX testing with Senior developer...
                                </p>
                                <p className="flex gap-2 text-[12px] items-center">
                                  <CiCalendar />
                                  30 Aug 2022 - 11:30Am
                                </p>
                              </div>
                            </div>
                            <span className="text-[25px]">...</span>
                          </div>

                          <div className="flex justify-between mt-[10px]">
                            <div className="flex gap-3">
                              <input type="checkbox" />
                              <div className="mt-[16px]">
                                <p className="text-[12px] font-semibold">
                                  UX testing with Senior developer...
                                </p>
                                <p className="flex gap-2 text-[12px] items-center">
                                  <CiCalendar />
                                  30 Aug 2022 - 11:30Am
                                </p>
                              </div>
                            </div>
                            <span className="text-[25px]">...</span>
                          </div>

                          <div className="flex justify-between mt-[10px]">
                            <div className="flex gap-3">
                              <input type="checkbox" checked />
                              <div className="mt-[16px]">
                                <p className="text-[12px] font-semibold">
                                  UX testing with Senior developer...
                                </p>
                                <p className="flex gap-2 text-[12px] items-center">
                                  <CiCalendar />
                                  30 Aug 2022 - 11:30Am
                                </p>
                              </div>
                            </div>
                            <span className="text-[25px]">...</span>
                          </div>

                          <div className="flex justify-between mt-[10px]">
                            <div className="flex gap-3">
                              <input type="checkbox" />
                              <div className="mt-[16px]">
                                <p className="text-[12px] font-semibold">
                                  UX testing with Senior developer...
                                </p>
                                <p className="flex gap-2 text-[12px] items-center">
                                  <CiCalendar />
                                  30 Aug 2022 - 11:30Am
                                </p>
                              </div>
                            </div>
                            <span className="text-[25px]">...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="block sm:block md:block lg:block xl:hidden">
            <img src={comp1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp1;
