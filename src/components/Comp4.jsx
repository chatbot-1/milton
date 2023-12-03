import React from "react";
import img7 from "../assets/img7.png";
import img4 from "../assets/img4.png";
import img2 from "../assets/img2.png";
import { IoVideocam } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

const Comp4 = () => {
  return (
    <div>
      <div className="container mt-[150px]">
        <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row justify-between items-center gap-[100px]">

          <div className="border w-[350px] sm:w-[450px] md:w-[450px] lg:w-[1000px] xl:w-[1350px]  bg-white ml-[0] sm:ml-[20px]] md:ml-[30px] lg:ml-[70px] xl:ml-[100px]  rounded-xl p-4">
            <p className="font-semibold">Notifications</p>

            <div className="mt-[20px]">

              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img
                    src={img4}
                    alt=""
                    className="h-[25px] w-[25px] p-1 rounded-full bg-[#C0C1C9]"
                  />
                  <div>
                    <p className="text-[12px] font-semibold">
                      Jonathan accepted the schedule call invite
                    </p>
                    <p className="text-[11px] flex gap-1 items-center">
                      <CiCalendar className="text-[14px] font-semibold" />
                      30 min call on 10 Feb, 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-[20px] items-center">
                <div className="flex gap-3 items-center">
                  <p className="h-[30px] w-[30px] flex bg-[#E7E2FD] text-[#8874DF] font-bold items-center justify-center rounded-full">
                    <CiCalendar />
                  </p>
                  <div>
                    <p className="text-[12px] font-semibold">
                      UI design - event added to your calender
                    </p>
                    <p className="text-[11px] flex gap-1 items-center">
                      <CiCalendar className="text-[14px] font-semibold" />
                      50 min event on 12 Feb, 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-[20px] items-center">
                <div className="flex gap-3 items-center">
                  <p className="h-[25px] flex items-center bg-[#E9EBFA] text-[#355CCB] rounded-full justify-center w-[30px]">
                    <IoVideocam />
                  </p>
                  <div>
                    <p className="text-[12px] font-semibold">
                      Reminder - scheduled call for "UX research" will start in
                      5 min
                    </p>
                    <p className="text-[11px] flex gap-1 items-center">
                      <CiCalendar className="text-[14px] font-semibold" />
                      2 hour event on 15 Feb, 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-[20px] items-center">
                <div className="flex gap-3 items-center">
                  <p className="h-[30px] w-[30px] flex items-center justify-center rounded-full bg-[#E7E2FD] text-[#8874DF] font-bold">
                    <CiCalendar />
                  </p>
                  <div>
                    <p className="text-[12px] font-semibold">
                    UI design - event added to your calender
                    </p>
                    <p className="text-[11px] flex gap-1 items-center">
                      <CiCalendar className="text-[14px] font-semibold" />
                      
                      50 min event on 12 Feb, 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-[20px] items-center">
                <div className="flex gap-3 items-center">
                  <img
                    src={img2}
                    alt=""
                    className="h-[25px] w-[25px] p-1 rounded-full bg-[#C0C1C9]"
                  />
                  <div>
                    <p className="text-[12px] font-semibold">
                      Jonathan accepted the schedule call invite
                    </p>
                    <p className="text-[11px] flex gap-1 items-center">
                      <CiCalendar className="text-[14px] font-semibold" />
                      30 min call on 10 Feb, 2023
                    </p>
                  </div>
                </div>
              </div>

             <div className="flex justify-between mt-[20px] items-center">
                <div className="flex gap-3 items-center">
                  <p className="h-[30px] flex items-center justify-center w-[30px] rounded-full bg-[#E9EBFA] text-[#355CCB]">
                    <IoVideocam />
                  </p>
                  <div>
                    <p className="text-[12px] font-semibold">
                      Reminder - scheduled call for "UX research" will start in
                      5 min
                    </p>
                    <p className="text-[11px] flex gap-1 items-center">
                      <CiCalendar className="text-[14px] font-semibold" />
                      2 hour event on 15 Feb, 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-[20px] items-center">
                <div className="flex gap-3 items-center">
                  <img
                    src={img7}
                    alt=""
                    className="h-[25px] w-[25px] p-1 rounded-full bg-[#C0C1C9]"
                  />
                  <div>
                    <p className="text-[12px] font-semibold">
                      Jonathan accepted the schedule call invite
                    </p>
                    <p className="text-[11px] flex gap-1 items-center">
                      <CiCalendar className="text-[14px] font-semibold" />
                      30 min call on 10 Feb, 2023
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div>
            <p className="bg-[#FDDED6] w-fit rounded-full font-semibold px-[25px] py-[8px]">
              Smart Reminders & Task
            </p>
            <h1 className="text-[40px] mt-[20px] leading-[45px] font-bold">
              Never miss an important deadline or event again
            </h1>
            <p className="mt-[50px] text-[#9D9BA3] text-[20px]">
              Never miss an important deadline again with our AI-driven
              notifications. Our app intelligently analyzes your schedule to
              prioritize what's most important, keeping you on track and
              ensuring your day is productive and stress-free.
            </p>
            <div className="flex relative justify-end mt-[100px]">
              <div className="bg-[#2E2E2E] text-white font-bold p-4 mr-[80px] text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] rounded-t-2xl rounded-bl-2xl w-[300px] sm:w-[320px] md:w-[340px] lg:w-[360px] xl:w-[370px] ">
                <p>
                  I've recommended this app to all my friends and colleagues!
                </p>
                <p className="mt-[10px] text-[#9D9BA3]">
                  Karl, CTO of a cool startup
                </p>
              </div>
              <div className="absolute top-[80px]">
                <img src={img4} alt="" className="h-16" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Comp4;
