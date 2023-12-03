import React from "react";
import { IoLogoVercel } from "react-icons/io5";

const Comp12 = () => {
  return (
    <div className="bg-[#F1F2F4]">
      <div className="container  mt-[150px] py-[60px]">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-start gap-8 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-28">
          <div>
            <div className="flex gap-2 items-center">
              <IoLogoVercel />
              <p className="text-[24px] font-semibold">Milton</p>
            </div>
            <div className="mt-[20px] text-[#6B6B78] font-semibold flex flex-col gap-3 tracking-tighter leading-5 text-[17px]">
              <div>
                <p>A short text explaining why my startup is so cool</p>
                <p className="mt-[15px]">© My super start-up</p>
              </div>
              <div></div>
            </div>
          </div>

          <div>
            <h2 className="text-[22px] font-semibold">Products</h2>
            <div className="mt-[20px] text-[#6B6B78] font-semibold flex flex-col gap-3 text-[17px]">
              <p>Features</p>
              <p>Testimonials</p>
              <p>Pricing</p>
              <p>FAQs</p>
            </div>
          </div>

          <div>
            <h2 className="text-[22px] font-semibold">Resources</h2>
            <div className="mt-[20px] text-[#6B6B78] font-semibold flex flex-col gap-3 text-[17px]">
              <p>Change log</p>
              <p>Testimonials</p>
              <p>Help center</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h2 className="text-[22px] font-semibold">Others</h2>
            <div className="mt-[20px] text-[#6B6B78] font-semibold flex flex-col gap-3 text-[17px]">
              <p>Privacy</p>
              <p>Terms</p>
              <p>Affiliation</p>
              <p>Press</p>
            </div>
          </div>

          <div>
            <h2 className="text-[22px] font-semibold">From the blog</h2>
            <div className="mt-[20px] text-[#6B6B78] font-semibold text-[17px] flex flex-col gap-8 leading-5 tracking-tight">
              <p>
                Mastering Your Schedule: Top Time Management Techniques for
                Balancing Work and Life
              </p>
              <p>
                Organizing Your Calendar for Enhanced Productivity and Focus
              </p>
              <p>
                The Power of Prioritization: Effective Strategies for Managing
                Your Time and Tasks
              </p>
              <p>
                Maximizing Your Minutes: Essential Tips for Streamlining Your
                Daily Routine and Calendar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp12;
