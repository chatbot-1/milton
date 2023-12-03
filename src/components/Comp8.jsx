import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/img1.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import { FaStar } from "react-icons/fa";

const Comp8 = () => {
  return (
    <div>
      <Swiper
        speed={20000}
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
                  src={img1}
                  alt=""
                  className="h-[30px] w-[30px] flex justify-center items-center p-1 rounded-full bg-[#DAD1F9]"
                />
                <p className="font-semibold">“Saves me time”</p>
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
              This calendar app has been a lifesaver! I used to forget important
              events, but now I'm always on top of my schedule.
            </div>
            <div className="flex justify-between mt-[10px] items-center">
              <p className="font-semibold">Sophie Devilan</p>
              <p className="text-[#A5A5AD]">Head of marketing</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border h-full p-5 rounded-xl text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px] bg-white">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <img
                  src={img7}
                  alt=""
                  className="h-[30px] w-[30px] flex justify-center items-center p-1 rounded-full bg-[#DAD1F9]"
                />
                <p className="font-semibold">“No more forgotten appointments”</p>
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
              I love how user-friendly this app is! It's so easy to add events
              and set reminders, and it's made my life so much more organized.
            </div>
            <div className="flex justify-between mt-[10px] items-center">
              <p className="font-semibold">Kyle Conord</p>
              <p className="text-[#A5A5AD]">Entrepreneur</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border h-full p-5 rounded-xl text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px] bg-white">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <img
                  src={img8}
                  alt=""
                  className="h-[30px] w-[30px] flex justify-center items-center p-1 rounded-full bg-[#DAD1F9]"
                />
                <p className="font-semibold">"Just love it"</p>
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
              I've tried a lot of calendar apps, but this one is by far the
              best! It's so intuitive and customizable, and it has all the
              features I need. Game changer!
            </div>
            <div className="flex justify-between mt-[10px] items-center">
              <p className="font-semibold">Brad de Costa</p>
              <p className="text-[#A5A5AD]">Entrepreneur</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Comp8;
