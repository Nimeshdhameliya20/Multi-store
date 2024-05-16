/* eslint-disable react/no-unescaped-entities */
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <div className="font-serif bg-cyan-100 object-cover rounded-bl-extraLarge rounded-br-extraLarge rounded-tl-extraLarge rounded-tr-extraLarge px-4 mx-20">
      <section className="text-gray-600 body-font mb-10" data-aos="fade-down">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto ">
          {/* Heading  */}
          <h1 className=" text-center text-3xl font-bold text-cyan-900">
            Testimonial
          </h1>
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-cyan-500">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4" data-aos="fade-up">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center hover:text-cyan-900">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="../img/2.jpg"
                />
                <p className="leading-relaxed ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus tempora, soluta laborum ipsa qui est delectus nisi
                  pariatur quisquam, itaque ipsum dicta ea perspiciatis! Fugiat,
                  repudiandae facilis. Quo sequi odit fuga totam perferendis
                  saepe a.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-cyan-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Nimesh Dhameliya
                </h2>
                <p className="text-gray-500">CEO</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 border-x">
              <div className="h-full text-center hover:text-cyan-900">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="../img/1.jpg"
                />
                <p className="leading-relaxed">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus assumenda laboriosam, amet, ea dolorem at ducimus
                  repudiandae vel quaerat sint asperiores, saepe ipsum
                  laudantium tenetur.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-cyan-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Sahil Patel
                </h2>
                <p className="text-gray-500">COO</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center hover:text-cyan-900">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="../img/3.jpg"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  velit dicta accusamus aperiam, soluta dolor delectus placeat
                  minus eveniet dolores cupiditate mollitia nisi! Labore,
                  repudiandae.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-cyan-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  XYZ{" "}
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
