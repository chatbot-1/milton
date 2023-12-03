import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { FaStar } from "react-icons/fa";

const Comp6 = () => {

  return (
    <div className="mt-[150px]">
      <p className="text-center py-[7px] px-[28px] w-fit m-auto rounded-full mb-[10px] bg-[#F1F2F4] text-[17px] font-semibold">
        They already love our products 😍
      </p>
      <h1 className="text-[55px] mb-[100px] text-[#2E2E2E] text-center w-[350px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[900px] leading-[65px] m-auto font-bold">
        See what our users say about us
      </h1>

      <Swiper
        speed={15000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        spaceBetween={-10}
        slidesPerView={2}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          350: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          440: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          540: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          748: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide>
          <div className="border h-full p-5 rounded-xl text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px] bg-white">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <img
                  src={img1}
                  alt=""
                  className="h-[30px] w-[30px] flex justify-center items-center p-1 rounded-full bg-[#DAD1F9]"
                />
                <p className="font-semibold">“The best time manager app”</p>
              </div>
              <div className="flex text-[#FCD53F] justify-center gap-2 items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="mt-[10px] text-[#9999A2]">
              This app has saved me so much time and stress! I used to
              constantly forget important dates, but now I can stay on top of
              everything. You should test it!
            </div>
            <div className="flex justify-between mt-[10px] items-center">
              <p className="font-semibold">Brad de Costa</p>
              <p className="text-[#A5A5AD]">Entrepreneur</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border h-full p-5 rounded-xl text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px] bg-white">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <img
                  src={img2}
                  alt=""
                  className="h-[30px] w-[30px] flex justify-center items-center p-1 rounded-full bg-[#DAD1F9]"
                />
                <p className="font-semibold">"Incredible UI"</p>
              </div>
              <div className="flex text-[#FCD53F] justify-center gap-2 items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="mt-[10px] text-[#9999A2]">
            I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need. Game changer!
            </div>
            <div className="flex justify-between mt-[10px] items-center">
              <p className="font-semibold">Annie Devy</p>
              <p className="text-[#A5A5AD]">Head of sales</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border h-full p-5 rounded-xl text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px] bg-white">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <img
                  src={img3}
                  alt=""
                  className="h-[30px] w-[30px] flex justify-center items-center p-1 rounded-full bg-[#DAD1F9]"
                />
                <p className="font-semibold">“Great for teamwork”</p>
              </div>
              <div className="flex text-[#FCD53F] justify-center gap-2 items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="mt-[10px] text-[#9999A2]">
            The UI of this app is just awesome, so fluid and well designed. The app has also all the features I need for my daily work. Just try it, you will fall in love!
            </div>
            <div className="flex justify-between mt-[10px] items-center">
              <p className="font-semibold">Hanna Becker</p>
              <p className="text-[#A5A5AD]">Head of Marketing</p>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Comp6;
