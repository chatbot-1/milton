import React from "react";
import { faqs } from "../assets/data/faqs";
import Faq from "./Faq";

const Faqs = () => {
  return (
    <div>
      <div className="container mt-[150px]">
        <div>
          <p className="text-center py-[7px] px-[28px] w-fit m-auto rounded-full mb-[10px] bg-[#F1F2F4] text-[17px] font-semibold">
          Relevant stuff, bla bla 📣
          </p>
          <h1 className="text-[40px] sm:text-[45px] md:text-[50px] lg:text-[55px] xl:text-[60px] mb-[100px] text-[#2E2E2E] text-center w-[350px] sm:w-[550px] md:w-[600px] lg:w-[700px] xl:w-[900px] leading-[45px] sm:leading-[50px] md:leading-[55px] lg:leading-[60px] xl:leading-[65px] m-auto font-bold">
          Frequently asked questions
          </h1>
        </div>
        <div className="w-[350px] sm:w-[550px] md:w-[600px] lg:w-[700px] xl:w-[900px] leading-[65px] m-auto font-bold">
          <ul className="mt-[20px]">
            {faqs.map((item, index) => (
              <Faq key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
