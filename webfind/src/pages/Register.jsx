import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white px-6 py-8 md:px-10 md:py-10 rounded-3xl border border-gray-200 shadow-lg w-full max-w-md">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center">Register</h2>

        <div className="mt-6">
          {/* Full Name */}
          <div className="mb-4">
            <label className="text-sm md:text-lg font-medium" htmlFor="name">Full Name</label>
            <input
              id="name"
              className="w-full border border-gray-300 rounded-xl p-3 mt-1 bg-gray-50 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              placeholder="Enter your Name"
              type="text"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="text-sm md:text-lg font-medium" htmlFor="dob">Date of Birth</label>
            <input
              id="dob"
              className="w-full border border-gray-300 rounded-xl p-3 mt-1 bg-gray-50 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              type="date"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm md:text-lg font-medium" htmlFor="email">Email</label>
            <input
              id="email"
              className="w-full border border-gray-300 rounded-xl p-3 mt-1 bg-gray-50 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              placeholder="Enter your Email"
              type="email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-sm md:text-lg font-medium" htmlFor="password">Password</label>
            <input
              id="password"
              className="w-full border border-gray-300 rounded-xl p-3 mt-1 bg-gray-50 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              placeholder="Enter your Password"
              type="password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="text-sm md:text-lg font-medium" htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              className="w-full border border-gray-300 rounded-xl p-3 mt-1 bg-gray-50 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              placeholder="Confirm your Password"
              type="password"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="mt-4 flex items-center">
            <input type="checkbox" id="terms" className="mr-2 accent-violet-500" />
            <label className="text-sm md:text-base font-medium" htmlFor="terms">
              I agree to the <span className="text-violet-500">Terms and Conditions</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Register Button */}
            <button className="py-3 rounded-xl active:scale-95 transition-all hover:scale-105 bg-violet-500 text-white text-lg font-bold shadow-md">
              Register
            </button>

            {/* Google Sign-In Button */}
            <button className="flex items-center justify-center border border-gray-300 py-3 rounded-xl active:scale-95 transition-all hover:scale-105 bg-white shadow-md text-gray-700 font-medium">
              <FaGoogle className="mr-2 text-red-500" />
              Sign in with Google
            </button>
          </div>

          {/* Already have an account? */}
          <div className="mt-6 flex justify-center">
            <p className="text-sm md:text-base">Already have an account?</p>
            <Link to="/login" className="text-sm md:text-base font-medium text-violet-500 ml-2 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
