import React from "react";
import Nav from "../component/nav";
import StarRating from "../component/StarRating";
import { FaAmazon, FaApple, FaGoogle, FaMicrosoft } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Nav />

      {/* Hero Section */}
      <div className="mt-20">
        <div className="relative h-[60vh] md:h-[80vh] w-full bg-[url('/bg4.jpg')] bg-cover bg-center">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gray-500 opacity-25" />

          {/* Content with Blurry Background */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl text-center max-w-2xl">
              <h1 className="text-3xl md:text-6xl font-bold text-center max-w-md">
                Find the next big thing
              </h1>
              <p className="text-md md:text-lg mt-4 font-bold">
                Connect with top companies and start your career today
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Companies Section */}
      <div className="mt-6 px-6 md:px-14 py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          Top Companies
        </h2>

        {/* Company Cards Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Google */}
          <CompanyCard
            icon={<FaGoogle className="text-red-500 text-5xl" />}
            name="Google"
            industry="Tech Company"
            salary="$20,000"
          />

          {/* Apple */}
          <CompanyCard
            icon={<FaApple className="text-black text-5xl" />}
            name="Apple"
            industry="Tech Company"
            salary="$22,000"
          />

          {/* Microsoft */}
          <CompanyCard
            icon={<FaMicrosoft className="text-blue-600 text-5xl" />}
            name="Microsoft"
            industry="Tech Company"
            salary="$25,000"
          />

          {/* Amazon */}
          <CompanyCard
            icon={<FaAmazon className="text-yellow-500 text-5xl" />}
            name="Amazon"
            industry="Tech Company"
            salary="$23,000"
          />
        </div>
      </div>
    </div>
  );
};

// Company Card Component
const CompanyCard = ({ icon, name, industry, salary }) => {
  return (
    <div className="relative p-6 border border-gray-300 rounded-3xl bg-[url('/bg.jpg')] bg-cover bg-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="absolute inset-0 bg-gray-500 opacity-15" />

      {/* Company Header */}
      <div className="relative flex items-center space-x-3">
        {icon}
        <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
      </div>

      {/* Job Info */}
      <div className="relative mt-4 text-sm md:text-md">
        <p className="font-bold">{industry}</p>
        <p className="font-bold text-green-600">Hiring</p>
      </div>

      {/* Salary & Rating */}
      <p className="relative text-sm md:text-md font-bold mt-2">
        Salary: <span className="text-gray-600">{salary}</span>
      </p>

      {/* Rating Component */}
      <div className="relative mt-3">
        <StarRating />
      </div>

      {/* Apply Button */}
      <div className="relative mt-4 flex justify-center">
        <button className="w-full py-2 rounded-xl active:scale-95 transition-transform bg-blue-500 text-white text-md md:text-lg font-bold">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Home;
