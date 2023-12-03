import React from 'react'
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import { FaStar } from "react-icons/fa";

const Comp7 = () => {
  return (
    <div>
      <Swiper
        speed={17000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        loop={true}
        modules={[Autoplay]}
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
                  src={img4}
                  alt=""
                  className="h-[30px] w-[30px] flex justify-center items-center p-1 rounded-full bg-[#DAD1F9]"
                />
                <p className="font-semibold">Life-changing”</p>
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
            Since I started using this app, I've saved so much time. I no longer have to manually add appointments or set reminders - it's all done for me!
            </div>
            <div className="flex justify-between mt-[10px] items-center">
              <p className="font-semibold">Kevin Douglas</p>
              <p className="text-[#A5A5AD]">Product design at Lambda</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border h-full p-5 rounded-xl text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px] bg-white">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <img
                  src={img5}
                  alt=""
                  className="h-[30px] w-[30px] flex justify-center items-center p-1 rounded-full bg-[#DAD1F9]"
                />
                <p className="font-semibold">“Better than the rest”</p>
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
            If you're looking for a reliable and easy-to-use calendar app, look no further! This app has everything you need, and it's made my life so much easier
            </div>
            <div className="flex justify-between mt-[10px] items-center">
              <p className="font-semibold">Michel O Neil</p>
              <p className="text-[#A5A5AD]">Designer</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border h-full p-5 rounded-xl text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px] bg-white">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <img
                  src={img6}
                  alt=""
                  className="h-[30px] w-[30px] flex justify-center items-center p-1 rounded-full bg-[#DAD1F9]"
                />
                <p className="font-semibold">“Highly recommend”</p>
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
            I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me.
            </div>
            <div className="flex justify-between mt-[10px] items-center">
              <p className="font-semibold">Kyle Conord </p>
              <p className="text-[#A5A5AD]">CEO of RoastingOS</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Comp7