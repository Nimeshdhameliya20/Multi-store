import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const SearchBar = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  const context = useContext(myContext);
  const { getAllProduct } = context;
  // Search State
  const [search, setSearch] = useState("");

  // Filter Search Data
  const filterSearchData = getAllProduct
    .filter((obj) => obj.title.toLowerCase().includes(search))
    .slice(0, 8);

  const navigate = useNavigate();

  return (
    <div className="font-serif" data-aos="zoom-in">
      {/* search input  */}
      <div className="input flex justify-center">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
          className=" bg-gray-200 placeholder-cyan-700 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-cyan-900 "
        />
      </div>

      {/* search drop-down  */}
      <div className=" flex justify-center  ">
        {search && (
          <div className="block absolute bg-cyan-50 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2 ">
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="py-2 px-2 cursor-pointer"
                      onClick={() => navigate(`/productinfo/${item.id}`)}
                    >
                      <div className="flex items-center gap-2 ">
                        <img
                          className="w-10"
                          src={item.productImageUrl}
                          alt=""
                        />
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="flex justify-center ">
                  <img
                    className=" w-20"
                    src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                    alt="img"
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
