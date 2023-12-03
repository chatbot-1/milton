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

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-[50px] lg:grid-cols-2 xl:grid-cols-2  mt-[100px]">
            <div>
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
                  <p className="mt-[10px] text-[#9D9BA3]">
                    Carla, Head of Finance
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-center mr-[200px]">
                <div>

                  <div className="flex justify-start">
                    <div className="p-5 flex justify-start bg-white border rounded-xl">
                      <ul className="flex justify-start flex-col gap-2 rounded-xl  p-4 text-[16px] font-semibold border-dashed border">
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
                  </div>

                  <div className="bg-white p-4 border rounded-xl absolute top-[18%] left-[35%] sm:left-[40%] md:left-[45%] lg:left-[35%] xl:left-[40%]">
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
      </div>
    </div>
  );
};

export default Comp2;
