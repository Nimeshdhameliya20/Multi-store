import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function HeroSection2() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <div>
      {/* <div className="flex p-4 md:w-1/2 sm:w-1/2 w-full"> */}
      <div className="flex p-4 w-full " data-aos="fade-up">
        <div className="flex shdow-md hover:shadow-xl rounded-lg px-2 py-2 rounded-br-extraLarge rounded-t-extraLarge">
          <img
            className="object-cover rounded-t-extraLarge rounded-br-extraLarge w-50 h-50"
            src="../img/img1.jpg"
            alt=""
          />
        </div>
        <div className="flex shdow-md hover:shadow-xl rounded-lg px-2 py-2 rounded-bl-extraLarge rounded-t-extraLarge ">
          <img
            className="object-cover rounded-bl-extraLarge rounded-t-extraLarge"
            src="../img/img2.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection2;
