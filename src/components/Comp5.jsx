import React from "react";
import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover2.png";
import cover3 from "../assets/cover3.png";
import cover4 from "../assets/cover4.png";
import cover5 from "../assets/cover5.png";
import cover6 from "../assets/cover6.png";

const Comp5 = () => {
  return (
    <div>
      <div className="container mt-[150px]">
        <div>
          <p className="text-center py-[7px] px-[28px] w-fit m-auto rounded-full mb-[10px] bg-[#F1F2F4] text-[17px] font-semibold">
            And so much more... <span>💼</span>
          </p>
          <h1 className="text-[40px] sm:text-[45px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-[#2E2E2E] text-center w-[350px] sm:w-[550px] md:w-[600px] lg:w-[700px] xl:w-[800px] leading-[45px] sm:leading-[50px] md:leading-[55px] lg:leading-[60px] xl:leading-[65px] m-auto font-bold">
            Our features to make your life easier
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-[100px] gap-5">

            <div className="">
              <div className="bg-[#F1F2F4] w-full h-[260px] rounded-xl flex justify-center items-center p-9">
                <img src={cover1} alt="" className="rounded shadow-sm" />
              </div>
              <div>
                <p className="text-[17px] mt-[25px] mb-[30px] px-[28px] py-[7px] rounded-full bg-[#F1F2F4] w-fit font-semibold">
                  Keep-Device Sync
                </p>
                <p className="text-[17px] mb-[50px] font-semibold text-[#6B6B78]">
                  Keep your schedule in sync across all your devices, ensuring
                  seamless access to your calendar, events, and tasks wherever
                  you go.
                </p>
              </div>
            </div>

            <div className="">
              <div className="bg-[#F1F2F4] w-full h-[260px] rounded-xl flex justify-center items-center p-9">
                <img src={cover2} alt="" className="rounded shadow-sm" />
              </div>
              <div>
                <p className="text-[17px] mt-[25px] mb-[30px] px-[28px] py-[7px] rounded-full bg-[#FEE9CB] w-fit font-semibold">
                  Auto Event Import
                </p>
                <p className="text-[17px] mb-[50px] font-semibold text-[#6B6B78]">
                  Automatically import events from emails, social media, and
                  other sources, so you never miss a beat or have to manually
                  input details.
                </p>
              </div>
            </div>

            <div className="">
              <div className="bg-[#F1F2F4] w-full h-[260px] rounded-xl flex justify-center items-center p-9">
                <img src={cover3} alt="" className="rounded shadow-sm" />
              </div>
              <div>
                <p className="text-[17px] mt-[25px] mb-[30px] px-[28px] py-[7px] rounded-full bg-[#CCEAFD] w-fit font-semibold">
                  Task Delegation
                </p>
                <p className="text-[17px] mb-[50px] font-semibold text-[#6B6B78]">
                  Easily assign tasks to team members, family, or friends,
                  promoting shared responsibility and seamless collaboration.
                </p>
              </div>
            </div>

            <div className="">
              <div className="bg-[#F1F2F4] w-full h-[260px] rounded-xl flex justify-center items-center p-9">
                <img src={cover4} alt="" className="rounded shadow-sm" />
              </div>
              <div>
                <p className="text-[17px] mt-[25px] mb-[30px] px-[28px] py-[7px] rounded-full bg-[#DDF4E4] w-fit font-semibold">
                  Voice Command Integration
                </p>
                <p className="text-[17px] mb-[50px] font-semibold text-[#6B6B78]">
                  Quickly create events, set reminders, or reschedule
                  appointments with voice commands, thanks to compatibility with
                  popular virtual assistants.
                </p>
              </div>
            </div>

            <div className="">
              <div className="bg-[#F1F2F4] w-full h-[260px] rounded-xl flex justify-center items-center p-9">
                <img src={cover5} alt="" className="rounded shadow-sm" />
              </div>
              <div>
                <p className="text-[17px] mt-[25px] mb-[30px] px-[28px] py-[7px] rounded-full bg-[#FDDED6] w-fit font-semibold">
                  Customizable Alerts
                </p>
                <p className="text-[17px] mb-[50px] font-semibold text-[#6B6B78]">
                  Personalize notification types and timings for events, tasks,
                  and goals, ensuring you stay on track and informed without
                  feeling overwhelmed.
                </p>
              </div>
            </div>

            <div className="">
              <div className="bg-[#F1F2F4] w-full h-[260px] rounded-xl flex justify-center items-center p-9">
                <img src={cover6} alt="" className="rounded shadow-sm" />
              </div>
              <div>
                <p className="text-[17px] mt-[25px] mb-[30px] px-[28px] py-[7px] rounded-full bg-[#C39CF6] w-fit font-semibold">
                  Privacy Protection
                </p>
                <p className="text-[17px] mb-[50px] font-semibold text-[#6B6B78]">
                  Safeguard your personal information and event details with our
                  robust security measures, including end-to-end encryption and
                  optional password protection.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp5;
