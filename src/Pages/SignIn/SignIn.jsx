import React, { useContext, useState } from "react";
import logo from "../../assets/shuriken.png";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const SignIn = () => {
  const { googleSignIn } = useContext(AuthContext);
  // NAME: React Hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};

  return (
    <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <img className="h-28" src={logo} alt="" />
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-5">
          <p
            tabIndex={0}
            role="heading"
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>
          <Link to={"/signup"}>
            <p className="text-sm mt-4 font-medium leading-none text-gray-500">
              Dont have account?{" "}
              <span
                tabIndex={0}
                role="link"
                aria-label="Sign up here"
                className="font-semibold text-teal-500 leading-none underline cursor-pointer"
              >
                {" "}
                Sign up here
              </span>
            </p>
          </Link>
          <button
            aria-label="Continue with google"
            role="button"
            onClick={googleSignIn}
            className="hover:bg-blue-gray-50 transition duration-200 ease-in  py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <FcGoogle className="text-xl"></FcGoogle>
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>
          <button
            aria-label="Continue with twitter"
            role="button"
            className="hover:bg-blue-gray-50 transition duration-200 ease-in py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
          >
            <BsTwitter className="text-xl text-cyan-500"></BsTwitter>
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Twitter
            </p>
          </button>

          {/* NAME: Form */}

          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                OR
              </p>
              <hr className="w-full bg-gray-400  " />
            </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Email
              </lable>
              <input
                aria-label="enter email adress"
                {...register("email")}
                role="input"
                type="email"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-6  w-full">
              <lable className="text-sm font-medium leading-none text-gray-800">
                Password
              </lable>
              <div className="relative flex items-center justify-center">
                <input
                  aria-label="enter Password"
                  {...register("password")}
                  role="input"
                  type="password"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
              </div>
            </div>
            <div className="mt-8">
              <Button
                role="button"
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2  text-sm font-semibold leading-none text-white focus:outline-none  border rounded  py-4 w-full"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
