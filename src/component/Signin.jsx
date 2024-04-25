import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className=" bg-green-200 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl text-blue-400 sm:text-2xl">
        Logo here
        </h1>
        <form
          action="#"
          className=" bg-yellow-100 mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-red-500 text-lg font-medium">
            Sign in 
          </p>

            <div className="relative">
              <input
                type="email"
                className=" bg-pink-100 w-full rounded-lg border-gray-200 p-4  text-blue-400 pe-12 text-sm shadow-sm"
                placeholder=" email"
              />
            </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className=" bg-pink-100 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm text-blue-400 shadow-sm"
                placeholder="password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

          <p className=" text-blue-500 text-center text-sm text-gray-500">
            No account?
            <a className=" text-red-500 underline" href="#">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
