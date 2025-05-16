import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { IoLogoLinkedin } from 'react-icons/io';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-500 p-10 text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Shine Coaching Center</h2>
          <p className="text-sm">Empowering the next generation with quality education and guidance. Join us to shine in your academics and beyond!</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p>Email: support@jobconnect.com</p>
          <p>Phone: +880987654321</p>
          <p>Address: 456 Career Avenue, Dhaka, Bangladesh</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white text-purple-600 rounded-full"><FaFacebookSquare /></a>
            <a href="#" className="p-2 bg-white text-blue-600 rounded-full"><FaTwitterSquare /></a>
            <a href="#" className="p-2 bg-white text-pink-600 rounded-full"><FaInstagramSquare /></a>
            <a href="#" className="p-2 bg-white text-blue-800 rounded-full"><IoLogoLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-8 pt-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Shine Coaching Center. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;