import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full flex h-screen">
      <div className="flex w-full items-center justify-center">
        <div className="bg-gray-100 px-10 py-7 rounded-3xl border-2 border-gray-200">
          <p className="text-5xl font-bold text-center">Welcome Back</p>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome back! Please enter your details
          </p>
          <div className="mt-6">
            <div>
              <label className="text-lg font-medium">Email</label>
              <input
                className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label className="text-lg font-medium">Password</label>
              <input
                className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your Password"
                type="password"
              />
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label className="ml-2 text-base font-medium" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <button className="text-base font-medium text-violet-500">
                Forgotten password
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-y-4">
              <button className="py-2 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale[1.01] ease-in-out bg-violet-500 text-lg text-white font-bold">
                Login
              </button>

              <button className="flex items-center justify-center active:scale-[.98] active:duration-75 transition-all hover:scale[1.01] ease-in-out border-2 border-gray-100 py-2 gap-2">
                <FaGoogle />
                Sign in with Google
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <p className="font-medium text-base">Don't have an account?</p>
              <Link to="/Register" className="font-medium text-base text-violet-500 ml-2">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
