import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmployerRegister = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center mt-40">
      <div className="bg-gray-100 px-10 py-15 rounded-3xl border-2 border-gray-200">
        <p className="text-5xl font-bold text-center">Register</p>

        <div className="mt-6">
          {/* Full Name */}
          <div>
            <label className="text-lg font-medium">Company Name</label>
            <input
              className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your Name"
              type="text"
            />
          </div>

          <div>
            <label className="text-lg font-medium">Address</label>
            <input
              className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your Address"
              type="text"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="text-lg font-medium">Date of Establishment</label>
            <input
              className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your DOB"
              type="date"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-lg font-medium">Email</label>
            <input
              className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your Email"
              type="email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-lg font-medium">Password</label>
            <input
              className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your Password"
              type="password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-lg font-medium">Confirm Password</label>
            <input
              className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Confirm your Password"
              type="password"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="mt-8 flex  items-baseline">
            <input type="checkbox" id="terms" className="mr-2" />
            <label className="text-base font-medium" htmlFor="terms">
              Terms and Conditions
            </label>
          </div>


          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-y-4">
            <button className="py-2 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out bg-violet-500 text-lg text-white font-bold">
              Sign in
            </button>

            <button className="flex items-center justify-center active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out border-2 border-gray-100 py-2 gap-2">
              <FaGoogle />
              Sign in with Google
            </button>
          </div>

          {/* Already have an account? */}
          <div className="mt-8 flex items-center justify-center">
            <p className="font-medium text-base">Already have an account?</p>
            <Link to="/login" className="font-medium text-base text-violet-500 ml-2">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerRegister;
