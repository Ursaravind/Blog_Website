import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Grid Layout for Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold">About My Blog</h3>
            <p className="mt-4 text-gray-400">
              My Blog is a platform where I share insights, tutorials, and stories about web development, programming, and the latest tech trends. Join me on this journey to explore the digital world!
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 font-bold text-gray-400">
              <li><a href="/" className="hover:text-blue-500">Home</a></li>
              <li><a href="/about" className="hover:text-blue-500">About Me</a></li>
              <li><a href="/blog" className="hover:text-blue-500">Blog</a></li>
              <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-2xl font-semibold">Contact Me</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Email: <a href="mailto:example@email.com" className="hover:text-white">aravindkumartirunagir03@email.com</a></li>
              <li>Phone: <a href="tel:+91 9347733508" className="hover:text-white">+91 9347733508</a></li>
              <li>Address: Hyderabad City ,India Country</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-10 flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500   hover:text-blue-600   ">
            <FaFacebookF  size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/aravindtirunagiri/?utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
            <FaInstagram size={24} />
          </a>
          <a href="http://www.linkedin.com/in/aravindkumar03" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://github.com/Ursaravind" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
            <FaGithub size={24} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 AviBlogs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
