import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch jobs when searchQuery or filter changes
  useEffect(() => {
    if (searchQuery.length > 2 || filter) {
      fetchJobs();
    }
  }, [searchQuery, filter]);

  // Fetch Jobs from API
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/jobs?search=${searchQuery}&filter=${filter}`);
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

    const navLinks = [
        {href: "#home", label:"Home"},
        {href: "#jobs", label:"Jobs"},
        {href: "#companies", label:"Companies"},
        {href: "#community", label:"Community"},
    ]

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100'>
        <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h16 '>
            {/* {logo name of logo} */}
            <div className='flex items-center gap-1 cursor-pointer'>

                <div className='text-xl font-medium'>
                    <span className='text-sky-800'>Web</span>
                    <span className='text-green-600'>find</span>
                </div>
            </div>

            {/* {desktop navitems} */}
            <div className='hidden md:flex items-center gap-10'>
                {
                    navLinks.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.href} 
                        onClick={() => setActiveLink(link.href)}
                        className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 
                        after:h-0.5 after:w-0 hover:after:w-full after:bg-green-600 after:transition-all 
                        ${activeLink === link.href ? "text-green-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>
                        {link.label}
                    </a>
                    )) 
                }
                </div>


            {/* {search and others} */}
            <div className='flex items-center gap-4 cursor-pointer'>
                <div className="relative" ref={searchRef}>
                    {/* Search Icon */}
                    <div
                        className="cursor-pointer p-1 rounded-full hover:bg-gray-200 transition"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <img src="/search.svg" alt="Search" className="w-7 h-7" />
                    </div>

                    {/* Search Popup */}
                    {isOpen && (
                        <div className="absolute top-0 right-12 bg-white shadow-md p-2 rounded-lg w-50 animate-fade-in">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    )}
                </div>

                <div>
                <img src="/notifications.svg" alt="Logo"
                    className="w-7 h-7" />
                </div>

                <div>
                    <img src="/account.svg" alt="Logo" 
                    className="w-7 h-7" />
                </div>
            </div>




            {/* {mobile menu} */}
        </div>

        
    </nav>
    
  )
}

export default Navbar
