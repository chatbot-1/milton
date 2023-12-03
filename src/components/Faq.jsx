import React, { useState } from "react";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const Faq = ({ item }) => {
  const [isOpen, isClose] = useState(false);
  const toggleAccordion = () => {
    isClose(!isOpen);
  };

  return (
    <div>
      <div>

        <div className="p-3 lg:p-5 rounded-[12px] bg-[#F1F2F4] mt-[40px] font-semibold mb-5 cursor-pointer">
          <div
            className="flex items-center justify-between gap-5"
            onClick={toggleAccordion}
          >
            <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-black">
              {item.question}
            </h4>
            <div
              className={`${
                isOpen && "bg-[#CBCBD1] text-white rounded-full"
              } w-5 h-5 lg:w-8 lg:h-8 rounded-full bg-[#CBCBD1] flex items-center justify-center`}
            >
              {isOpen ? <AiOutlineMinus className="text-[#90909E]"/> : <AiOutlinePlus className="text-[#90909E]"/>}
            </div>
          </div>

          {isOpen && (
            <div className="mt-4">
              <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 text-[#6B6B78]">
                {item.content}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
