import React from "react";

import heroImg01 from "../assets/images/bar1.webp";
import heroImg02 from "../assets/images/bar2.webp";
import heroImg03 from "../assets/images//bar3.webp";
const Home = () => {
  return (
    <>
      <section className="hero__section pt-[40px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[50px]  justify-between ">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-stone-500 font-[800] md:text-[60px] md:leading-[70px] ">
                  Bar Quatro Authentic Italian
                </h1>

                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus quaerat cumque fugit, perspiciatis cum nemo aperiam, aut
                  quia earum amet architecto, modi odio. Soluta unde ducimus
                  perferendis?
                </p>
              </div>
            </div>

            {/* hero content */}

            <div className="flex gap-[20px] justify-end">
              <div className="mt-[50px] ">
                <img className="w-full" src={heroImg01} alt="" />
              </div>

              <div className="mt-[20px]">
                <img src={heroImg02} className="w-full mb-[20px]" alt="" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
