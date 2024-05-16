/* eslint-disable react/no-unescaped-entities */
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";
import Aos from "aos";
import "aos/dist/aos.css";

const Signup = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // User Signup State
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  /**========================================================================
   *                          User Signup Function
   *========================================================================**/

  const userSignupFunction = async () => {
    // validation
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      toast.error("All Fields are required");
    }

    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );

      // create user object
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // create user Refrence
      const userRefrence = collection(fireDB, "user");

      // Add User Detail
      addDoc(userRefrence, user);

      setUserSignup({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Signup Successfully");

      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-cyan-200 font-serif">
      {loading && <Loader />}
      {/* Login Form  */}
      <div
        className="login_Form bg-cyan-50 px-8 py-6  rounded-xl shadow-md  hover:shadow-cyan-700 border-cyan-200 border-2 hover:shadow-xl"
        data-aos="zoom-in"
      >
        {/* Top Heading  */}
        <div className="mb-5  ">
          <h2 className="text-center text-2xl font-bold text-cyan-500 ">
            Signup
          </h2>
        </div>

        {/* Input One  */}
        <div className="mb-3 text-cyan-500">
          <input
            type="text"
            placeholder="Full Name"
            value={userSignup.name}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                name: e.target.value,
              });
            }}
            className="bg-cyan-50 border border-cyan-200 px-2 py-2 w-96 rounded-md outline-none placeholder-cyan-200"
          />
        </div>

        {/* Input Two  */}
        <div className="mb-3 text-cyan-500">
          <input
            type="email"
            placeholder="Email Address"
            value={userSignup.email}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                email: e.target.value,
              });
            }}
            className="bg-cyan-50 border border-cyan-200 px-2 py-2 w-96 rounded-md outline-none placeholder-cyan-200"
          />
        </div>

        {/* Input Three  */}
        <div className="mb-5 text-cyan-500">
          <input
            type="password"
            placeholder="Password"
            value={userSignup.password}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                password: e.target.value,
              });
            }}
            className="bg-cyan-50 border border-cyan-200 px-2 py-2 w-96 rounded-md outline-none placeholder-cyan-200"
          />
        </div>

        {/* Signup Button  */}
        <div className="mb-5">
          <button
            type="button"
            onClick={userSignupFunction}
            className="bg-cyan-500 hover:bg-cyan-600 w-full text-white text-center py-2 font-bold rounded-md "
          >
            Signup
          </button>
        </div>

        <div>
          <h2 className="text-cyan-500">
            Have an account{" "}
            <Link className=" text-cyan-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
