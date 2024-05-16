import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    // <div className="w-full h-[75vh] font-serif ">
    //   <img
    //     className=" h-44 lg:h-full w-full object-cover rounded-bl-extraLarge rounded-br-extraLarge"
    //     src="../img/hero1.jpg"
    //     alt=""
    //   />
    //   <div className="max-w-[1140px] m-auto overflow-hidden top-[35%] w-75vh flex flex-col left-20 justify-center text-cyan-900 max-w-[1140px] m-auto overflow-hidden ">
    //     <div className="absolute top-[35%] w-75vh flex flex-col left-20 justify-center text-cyan-900 max-w-[1140px] m-auto overflow-hidden ">
    //       <h2 className=" font-bold text-6xl top-50 "> Multi-store</h2>
    //       <p className="  text-xl text-cyan-900 ">
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
    //         Fugit deserunt itaque officiis modi sunt culpa.
    //       </p>
    //       <br />
    //       <motion.button
    //         whileTap={{ scale: 1.2 }}
    //         to="/allproduct"
    //         className=" bg-cyan-900 hover:bg-cyan-800 w-[30%] text-white py-[4px] rounded-2xl font-bold "
    //       >
    //         <Link
    //           to="/allproduct"
    //           className="text-cyan-200 hover:text-cyan-100"
    //         >
    //           Shop Now
    //         </Link>
    //       </motion.button>
    //     </div>
    //   </div>
    // </div>

    // <div className="px-4 py-32 bg-cyan-200 mx-auto">
    //   <div className="text-cyan-800 text-left mx-12 ">
    //     <h1 className=" text-5xl lg:text-7xl leading-snug font-bold mb-5">
    //       Multi-store
    //     </h1>
    //     <p className="text-cyan-700 lg:w-3/5  mb-5 font-primary font-semibold">
    //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
    //       necessitatibus quasi, earum dolores omnis, quos harum, quam reiciendis
    //       accusamus explicabo incidunt dolorum doloremque minima quibusdam!
    //     </p>
    //     <div>
    //       <motion.button
    //         whileTap={{ scale: 1.2 }}
    //         to="/allproduct"
    //         className=" bg-cyan-800 hover:bg-cyan-800 w-[10%] text-white py-[4px] rounded-2xl font-bold my-2x"
    //       >
    //         <Link
    //           to="/allproduct"
    //           className="text-cyan-200 hover:text-cyan-100"
    //         >
    //           Shop Now
    //         </Link>
    //       </motion.button>
    //     </div>
    //   </div>
    //   <div className="h-[30%] w-[20%] flex">
    //     <img src="../img/hero1.jpg" alt="" />
    //   </div>
    // </div>

    <div className="w-full bg-cyan-200  px- rounded-bl-extraLarge rounded-br-extraLarge font-serif">
      <div className="max-w-[1240px]  grid md:grid-cols-2">
        <img
          className="w-[500px]  rounded-bl-extraLarge rounded-br-extraLarge"
          src="../img/hero5.png"
          alt="/"
          data-aos="fade-right"
        />
        <div
          className="flex flex-col justify-center text-cyan-900 mx-4 "
          data-aos="fade-up"
        >
          <p className="text-cyan-800 font-bold text-2xl">Multi-Store</p>
          <h1 className="md:text-6xl sm:text-3xl  font-bold py-2 ">
            Explore, shop, repeat again.
          </h1>
          <p className="lg:w-5/5 font-bold text-cyan-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <motion.button
            whileTap={{ scale: 1.2 }}
            to="/allproduct"
            className=" bg-cyan-900 hover:bg-cyan-800 w-[30%] text-white py-[4px] rounded-2xl font-bold my-2"
          >
            <Link
              to="/allproduct"
              className="text-cyan-200 hover:text-cyan-100"
            >
              Shop Now
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
