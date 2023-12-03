import React from "react";
import img6 from "../assets/img6.png";

const Comp2 = () => {
  return (
    <div>
      <div className="container mt-[100px]">
        <div>
          <div>
            <p className="text-center bg-[#F1F2F4] w-fit m-auto py-[8px] px-[20px] rounded-full text-[17px] font-semibold">
              Our main features <span>🦸🏼</span>
            </p>
            <h1 className="text-center text-[40px] sm:text-[45px] md:text-[50px] lg:text-[55px] leading-10 xl:text-[60px] font-bold">
              Discover your new superpowers
            </h1>
          </div>

          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-28 sm:gap-16 md:gap-20 mt-[100px]">
            
            <div className="w-[380px] sm:w-[430px] md:w-[470px] lg:w-[550px] xl:w-[600px] md:m-auto sm:m-auto lg:m-0 xl:m-0">
              <p className="text-[15px] sm:text-[16px] md:text-[16px] lg:text-[17px] xl:text-[17px] font-semibold mb-[20px] py-[8px] px-[20px] rounded-full w-fit bg-[#FEE9CB]">
                Seamless Scheduling
              </p>
              <h2 className="text-[30px] sm:text-[35px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-bold leading-[45px]">
                Focus on what matters most for you
              </h2>
              <p className="text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] text-[#7C7B87] font-semibold mt-[20px] sm:mt-[20px] md:mt-[30px] lg:mt-[40px] xl:mt-[50px]">
                Effortlessly plan your day with our intuitive drag-and-drop
                interface. Sync with multiple calendar platforms, import events
                from emails, and add participants with just a few clicks.
              </p>
              <div className="flex relative justify-start mt-[50px]">
                <div className="absolute top-[80px]">
                  <img src={img6} alt="" className="h-16" />
                </div>
                <div className="bg-[#2E2E2E] text-white font-bold p-4 ml-[80px] text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] rounded-t-2xl rounded-br-2xl w-[300px] sm:w-[320px] md:w-[330px] lg:w-[350px] xl:w-[370px] ">
                  <p>
                    I tested many calendar apps. This app is the best of all! It
                    saves me hours of time.
                  </p>
                  <p className="mt-[10px] text-[#9D9BA3]">Carla, Head of Finance</p>
                </div>
              </div>
            </div>

            <div className="flex justify-evenly relative">

              <div className="p-5 bg-white border mr-[200px] sm:mr-[150px] md:mr-[100px] lg:mr-[50px] xl:mr-0 rounded-xl">
                <ul className="flex flex-col gap-2 rounded-xl items-center justify-center p-4 text-[16px] font-semibold border-dashed border">
                  <li>January</li>
                  <li>February</li>
                  <li>March</li>
                  <li>April</li>
                  <li>May</li>
                  <li>June</li>
                  <li>July</li>
                  <li>August</li>
                  <li>September</li>
                  <li>October</li>
                  <li>November</li>
                  <li>December</li>
                </ul>
              </div>

              <div className="bg-white p-4 border rounded-xl absolute top-[25%] left-[29%] sm:left-[55%] md:left-[55%] lg:left-[70%] xl:left-[70%]">
                <p className="text-center text-[17px] font-semibold">
                  January 2023
                </p>
                <div className="flex mt-[30px] font-semibold text-[15px] gap-2">
                  <div>
                    <p>M</p>
                    <div className="mt-[52px] text-[16px] flex gap-3 flex-col justify-center items-center">
                      <p className="text-[#9F9F9F]">2</p>
                      <p className="text-[#9F9F9F]">9</p>
                      <p>16</p>
                      <p className="bg-[#4356FA] text-white h-7 w-7 rounded-full flex justify-center items-center">
                        23
                      </p>
                      <p>30</p>
                    </div>
                  </div>
                  <div>
                    <p>T</p>
                    <div className="mt-[52px] text-[16px] flex gap-3 flex-col justify-center items-center">
                      <p className="text-[#9F9F9F]">3</p>
                      <p className="text-[#9F9F9F]">10</p>
                      <p>17</p>
                      <p className="bg-[#4356FA] text-white h-7 w-7 rounded-full flex justify-center items-center">
                        24
                      </p>
                      <p>31</p>
                    </div>
                  </div>
                  <div>
                    <p>W</p>
                    <div className="mt-[52px] text-[16px] gap-3 flex flex-col justify-center items-center">
                      <p className="text-[#9F9F9F]">4</p>
                      <p>11</p>
                      <p className="bg-[#4356FA] text-white h-7 w-7 rounded-full flex justify-center items-center">
                        18
                      </p>
                      <p>25</p>
                    </div>
                  </div>
                  <div>
                    <p>T</p>
                    <div className="mt-[52px] text-[16px] gap-3 flex flex-col justify-center items-center">
                      <p className="text-[#9F9F9F]">5</p>
                      <p>12</p>
                      <p className="bg-[#4356FA] text-white h-7 w-7 rounded-full flex justify-center items-center">
                        19
                      </p>
                      <p>26</p>
                    </div>
                  </div>
                  <div>
                    <p>F</p>
                    <div className="mt-[52px] text-[16px] gap-3 flex flex-col justify-center items-center">
                      <p className="text-[#9F9F9F]">6</p>
                      <p>13</p>
                      <p className="bg-[#4356FA] text-white h-7 w-7 rounded-full flex justify-center items-center">
                        20
                      </p>
                      <p>27</p>
                    </div>
                  </div>
                  <div className="text-[#E7473B]">
                    <p>S</p>
                    <div className="mt-[52px] text-[16px] gap-3 flex flex-col justify-center items-center">
                      <p className="text-[#F0CCC8]">7</p>
                      <p>14</p>
                      <p className="bg-[#4356FA] text-white h-7 w-7 rounded-full flex justify-center items-center">
                        21
                      </p>
                      <p>28</p>
                    </div>
                  </div>
                  <div className="text-[#E7473B]">
                    <p>S</p>
                    <div className="flex text-[16px] flex-col mt-[15px] gap-[12px] justify-center items-center">
                      <p className="text-[#F0CCC8]">1</p>
                      <p className="text-[#F0CCC8]">8</p>
                      <p>15</p>
                      <p>22</p>
                      <p>29</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp2;
