import React from "react";

import menu1 from "../assets/images/menu1.jpg";
import menu2 from "../assets/images/menu2.jpg";
import menu3 from "../assets/images/menu3.jpg";
import menu4 from "../assets/images/menu4.jpg";
import menu5 from "../assets/images/menu5.jpg";
import menu6 from "../assets/images/menu6.jpg";
import menu7 from "../assets/images/menu7.jpg";
import menu8 from "../assets/images/menu8.jpg";
import menu9 from "../assets/images/menu9.jpg";
import menu10 from "../assets/images/menu10.jpg";

const Menu = () => {
  return (
    <>
      {/* rgb(116, 119, 117) */}
      <section className="hero__section pt-[40px] 2xl:h-[800px] bg-stone-500">
        <div className="container ">
          <div className="lg:w-[980px] mx-auto">
            <img src={menu1} alt="menu" className="w-full border-red-600" />
            <img src={menu2} alt="menu" className="w-full" />
            <img src={menu3} alt="menu" className="w-full" />
            <img src={menu4} alt="menu" className="w-full" />
            <img src={menu5} alt="menu" className="w-full" />
            <img src={menu6} alt="menu" className="w-full" />
            <img src={menu7} alt="menu" className="w-full" />
            <img src={menu8} alt="menu" className="w-full" />
            <img src={menu9} alt="menu" className="w-full" />
            <img src={menu10} alt="menu" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
