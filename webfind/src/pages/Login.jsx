import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white px-6 py-8 md:px-10 md:py-10 rounded-3xl border border-gray-200 shadow-lg w-full max-w-md">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center">Welcome Back</h2>
        <p className="text-sm md:text-lg text-gray-500 mt-2 text-center">
          Please enter your details to log in.
        </p>

        {/* Form */}
        <div className="mt-6">
          {/* Email Field */}
          <div className="mb-4">
            <label className="text-sm md:text-lg font-medium" htmlFor="email">Email</label>
            <input
              id="email"
              className="w-full border border-gray-300 rounded-xl p-3 mt-1 bg-gray-50 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              placeholder="Enter your Email"
              type="email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="text-sm md:text-lg font-medium" htmlFor="password">Password</label>
            <input
              id="password"
              className="w-full border border-gray-300 rounded-xl p-3 mt-1 bg-gray-50 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              placeholder="Enter your Password"
              type="password"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mt-4">
            <label className="flex items-center text-sm md:text-base font-medium">
              <input type="checkbox" className="mr-2 accent-violet-500" />
              Remember me
            </label>
            <button className="text-sm md:text-base font-medium text-violet-500 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Login Button */}
            <button className="py-3 rounded-xl active:scale-95 transition-all hover:scale-105 bg-violet-500 text-white text-lg font-bold shadow-md">
              Login
            </button>

            {/* Google Sign-In Button */}
            <button className="flex items-center justify-center border border-gray-300 py-3 rounded-xl active:scale-95 transition-all hover:scale-105 bg-white shadow-md text-gray-700 font-medium">
              <FaGoogle className="mr-2 text-red-500" />
              Sign in with Google
            </button>
          </div>

          {/* Register Link */}
          <div className="mt-6 flex justify-center">
            <p className="text-sm md:text-base">Don't have an account?</p>
            <Link to="/register" className="text-sm md:text-base font-medium text-violet-500 ml-2 hover:underline">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
