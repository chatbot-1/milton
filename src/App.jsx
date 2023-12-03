import "./App.css";
import { IoLogoVercel } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Hero from "./components/Hero";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";
import Comp9 from "./components/Comp9";
import Faqs from "./components/Faqs";
import Comp11 from "./components/Comp11";
import Comp12 from "./components/Comp12";
import { useRef } from "react";
import Comp13 from "./components/Comp13";

function App() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("response");
  };

  return (
    <>
      <header className="header py-[20px] border-b-[1px]">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <p className="text-[14px] p-1 rounded-md bg-[#F1F2F4]">
              <IoLogoVercel />
            </p>{" "}
            Milton
          </div>
          <div className="nav-hide">
            <ul className="flex nav-hide gap-9 text-[#6B6B78] font-semibold text-[18px]">
              <li>Features</li>
              <li>Testimonial</li>
              <li>Pricing</li>
              <li>FAQs</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="hidden" ref={navRef}>
            <ul className="flex nav-hide gap-9 text-[#6B6B78] font-semibold text-[18px]">
              <li>Features</li>
              <li>Testimonial</li>
              <li>Pricing</li>
              <li>FAQs</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="flex gap-2 text-[18px]">

            <button className="bg-[#F1F2F4] nav-hide px-[15px] py-[6px] font-semibold rounded-xl">
              Log in
            </button>
            <button className="bg-[#2E2E2E] nav-hide text-white px-[15px] py-[6px] font-semibold rounded-xl">
              Get started
            </button>

            <div className="cursor-pointer text-[22px]">
              <button onClick={showNavbar} className="nav-btn nav-close-btn">
                {/* <FaTimes /> */}
              </button>
              <button onClick={showNavbar} className="nav-btn">
                <FaBars/>
              </button>
            </div>

          </div>
        </div>
      </header>

      <section>
        <Hero />
      </section>

      <section>
        <Comp1 />
      </section>

      <section>
        <Comp2 />
      </section>

      <section>
        <Comp3 />
      </section>

      <section>
        <Comp13 />
      </section>

      <section>
        <Comp4 />
      </section>

      <section>
        <Comp5 />
      </section>

      <div>
        <Comp6 />
      </div>

      <div className="mt-[20px]">
        <Comp7 />
      </div>

      <div className="mt-[20px]">
        <Comp8 />
      </div>

      <div>
        <Comp9 />
      </div>

      <section>
        <Faqs />
      </section>

      <section>
        <Comp11 />
      </section>

      <footer>
        <Comp12 />
      </footer>
    </>
  );
}

export default App;
