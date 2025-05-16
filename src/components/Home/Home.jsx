import React, { useContext } from 'react';
import { SiProgress } from "react-icons/si"
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext'
const Home = () => {
  const{user}=useContext(AuthContext)
    return (
        <div>
            <nav className="bg-blue-800 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
       <h2><SiProgress /></h2>
        <span className="text-xl font-bold">  Job Portal</span>
        
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-base">
        {
          user ? <></> :<>
           <Link to="/homepage" className="hover:text-gray-300 transition">Home</Link>
        <Link to="/register" className="hover:text-gray-300 transition">Register</Link>
        <Link to="/signin" className="hover:text-gray-300 transition">SignIn</Link>
       </>
        }
       
      </div>
    </nav>
        </div>
    );
};

export default Home;