import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 text-gray-700">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <Image src="/images/Stock-logo-1.png" width={100} height={100} alt="Olives Stocks Logo" className="h-8 w-auto mr-2" />
            <h3 className="text-xl font-semibold">Olives Stocks</h3>
          </div>
          <p className="text-sm mb-4">
            Were a cement tile company with a passion for color, stocking hundreds of cement tiles at our
            warehouse in New Jersey with fast shipping nationwide!
          </p>
          <p className="text-sm">Lets help you create a space youll love!</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200 p-2">
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200 p-2">
              <FaInstagram className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200 p-2">
              <FaTwitter className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200 p-2">
              <FaLinkedinIn className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Link</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-gray-900 transition duration-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-900 transition duration-200">Browse Cement Tiles</a></li>
            <li><a href="#" className="hover:text-gray-900 transition duration-200">About Us</a></li>
            <li><a href="#" className="hover:text-gray-900 transition duration-200">Gallery</a></li>
            <li><a href="#" className="hover:text-gray-900 transition duration-200">Blog</a></li>
            <li><a href="#" className="hover:text-gray-900 transition duration-200">Refund Policy</a></li>
            <li><a href="#" className="hover:text-gray-900 transition duration-200">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-gray-900 transition duration-200">Trade</a></li>
            <li><a href="#" className="hover:text-gray-900 transition duration-200">Data sheet</a></li>
            <li><a href="#" className="hover:text-gray-900 transition duration-200">Contact Us</a></li>
          </ul>
        </div>

        {/* Subscribe Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe To Our Daily Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-white border border-gray-300 rounded-l-md py-2 px-4 text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-r-md text-sm transition duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              18000 Commerce Parkway <br /> Mt Laurel, NJ 08054
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-gray-500" />
              856-988-1802
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-gray-500" />
              <a href="mailto:olesya@liltile.com" className="hover:text-gray-900 transition duration-200">olesya@liltile.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 py-4">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex justify-between items-center text-xs text-gray-500">
          <p>© 2025 rafimassanwa. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-700 transition duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-700 transition duration-200">Conditions</a>
            <a href="#" className="hover:text-gray-700 transition duration-200">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;