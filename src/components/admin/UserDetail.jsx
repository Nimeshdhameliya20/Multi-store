import { useContext } from "react";
import myContext from "../../context/myContext";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const UserDetail = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  const context = useContext(myContext);
  const { getAllUser } = context;
  return (
    <div>
      <div>
        <div
          className="py-5 flex justify-between items-center"
          data-aos="fade-up"
        >
          {/* text  */}
          <h1 className=" text-xl text-cyan-300 font-bold">All User</h1>
        </div>

        {/* table  */}
        <div className="w-full overflow-x-auto" data-aos="fade-up">
          <table className="w-full text-left border border-collapse sm:border-separate border-cyan-300 text-cyan-500">
            <tbody>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-cyan-300 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  S.No.
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-cyan-300 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Name
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-cyan-300 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Email
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-cyan-300 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Uid
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-cyan-300 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Role
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-cyan-300 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Date
                </th>
              </tr>
              {getAllUser.map((value, index) => {
                return (
                  <tr key={index} className="text-cyan-500">
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-cyan-300 stroke-slate-500 text-slate-500 ">
                      {index + 1}.
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-cyan-300 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                      {value.name}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-cyan-300 stroke-slate-500 text-slate-500 cursor-pointer ">
                      {value.email}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-cyan-300 stroke-slate-500 text-slate-500  cursor-pointer ">
                      {value.uid}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-cyan-300 stroke-slate-500 text-slate-500  cursor-pointer ">
                      {value.role}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-cyan-300 stroke-slate-500 text-slate-500 cursor-pointer ">
                      {value.date}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
