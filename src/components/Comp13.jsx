import React from "react";
import img6 from "../assets/img6.png";
import graph from "../assets/graph.png";

const Comp13 = () => {
  return (
    <div>
      <div className="container mt-[150px]">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-28 sm:gap-16 md:gap-20 mt-[100px]">
            <div>
              <div className=" lg:m-0 xl:m-0">
                <p className="text-[15px] sm:text-[16px] md:text-[16px] lg:text-[17px] xl:text-[17px] font-semibold mb-[20px] py-[8px] px-[20px] rounded-full w-fit bg-[#DDF4E4]">
                  Seamless Scheduling
                </p>
                <h2 className="text-[30px] sm:text-[35px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-bold leading-[45px]">
                  Focus on what matters most for you
                </h2>
                <p className="text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] text-[#7C7B87] font-semibold mt-[20px] sm:mt-[20px] md:mt-[30px] lg:mt-[40px] xl:mt-[50px]">
                  Effortlessly plan your day with our intuitive drag-and-drop
                  interface. Sync with multiple calendar platforms, import
                  events from emails, and add participants with just a few
                  clicks.
                </p>
                <div className="flex relative justify-start mt-[50px]">
                  <div className="absolute top-[80px]">
                    <img src={img6} alt="" className="h-16" />
                  </div>
                  <div className="bg-[#2E2E2E] text-white font-bold p-4 ml-[80px] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] rounded-t-2xl rounded-br-2xl w-[300px] sm:w-[320px] md:w-[330px] lg:w-[350px] xl:w-[370px] ">
                    <p>
                      I've tried a lot of calendar apps, but this one is by far
                      the best! It's so intuitive and customizable, and it has
                      all the features I need.
                    </p>
                    <p className="mt-[10px] text-[#9D9BA3]">Annie, Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white p-5 border rounded-xl flex justify-center items-center w-fit">
                <img
                  src={graph}
                  alt=""
                  className="h-[250px] sm:h-[350px] md:h-[500px] lg:h-full xl:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp13;
