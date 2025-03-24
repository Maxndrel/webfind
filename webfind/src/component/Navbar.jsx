import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch, AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { FiLogOut, FiSettings, FiHelpCircle } from "react-icons/fi";
import { MdWork, MdOutlineHistory, MdPeople, MdBusiness, MdOutlineTrackChanges, MdNotifications } from "react-icons/md";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const user = {
    firstName: "Omajuwa",
    lastName: "Emmanuel",
    profilePicture: "",
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getUserInitials = () => {
    return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <div className="text-xl font-medium cursor-pointer">
          <span className="text-sky-800">Web</span>
          <span className="text-green-600">find</span>
        </div>

        {/* Search & Icons */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div
            className={`relative flex items-center transition-all duration-300 ease-in-out rounded-full px-3 py-1 
              ${isSearchOpen ? "w-64 bg-white shadow-md border border-gray-300" : "w-10 justify-center border-transparent"}`}
            onClick={() => setIsSearchOpen(true)}
            onBlur={() => setIsSearchOpen(false)}
          >
            {/* Search Icon */}
            <span className="flex items-center justify-center w-10 h-7">
              <AiOutlineSearch size={24} className="text-gray-700 cursor-pointer" />
            </span>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full bg-transparent outline-none transition-opacity duration-300 ${
                isSearchOpen ? "opacity-100 ml-2" : "opacity-0 w-0"
              }`}
            />
          </div>

          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            <AiOutlineBell
              size={24}
              className="text-gray-700 hover:text-gray-900 transition cursor-pointer"
              onClick={() => setIsNotifOpen(!isNotifOpen)}
            />
            {isNotifOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-xl border border-gray-200 p-3 animate-fade-slide">
                <h3 className="text-sm font-medium border-b pb-2">Notifications</h3>
                <p className="py-3 text-sm text-gray-500 text-center">No notifications</p>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <div
              className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              {user.profilePicture ? (
                <img src={user.profilePicture} alt="Profile" className="w-full h-full rounded-full" />
              ) : (
                <span className="text-gray-700 font-medium">{getUserInitials()}</span>
              )}
            </div>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden animate-fade-slide">
                <div className="p-4 flex items-center gap-3 border-b bg-gray-50">
                  <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-medium">
                    {user.profilePicture ? (
                      <img src={user.profilePicture} alt="Profile" className="w-full h-full rounded-full" />
                    ) : (
                      getUserInitials()
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{user.firstName} {user.lastName}</p>
                  </div>
                </div>
                
                {/* Dropdown Menu */}
                <ul className="py-2 text-sm text-gray-700">
                  <DropdownItem icon={<AiOutlineUser />} text="Profile" />
                  <DropdownItem icon={<MdWork />} text="Job Preferences" />
                  <DropdownItem icon={<MdOutlineHistory />} text="Job Activity" />
                  <DropdownItem icon={<MdPeople />} text="Community Follows" />
                  <DropdownItem icon={<MdBusiness />} text="Company Follows" />
                  <DropdownItem icon={<MdOutlineTrackChanges />} text="Contributions" />
                  <DropdownItem icon={<FiSettings />} text="Account Settings" />
                  <DropdownItem icon={<MdNotifications />} text="Notifications" />
                  <DropdownItem icon={<FiHelpCircle />} text="Help Center" />
                  <DropdownItem icon={<FiLogOut />} text="Sign Out" red />
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

/* Dropdown Item Component */
const DropdownItem = ({ icon, text, red }) => (
  <li className={`px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition ${red ? "text-red-600 hover:bg-red-100" : ""}`}>
    <span className="text-lg">{icon}</span>
    {text}
  </li>
);

export default Navbar;
