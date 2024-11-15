import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-black via-gray-500 to-black py-16 px-4 lg:py-32">
        <div className="text-white text-center">
          {/* Page Title */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-5">
            Contact <span className="text-orange-500">Page</span>
          </h1>

          {/* Description */}
          <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-2xl max-w-2xl mx-auto font-serif text-gray-300">
            Feel free to reach out to us for any inquiries, feedback, or collaborations. We're here to help you!
          </p>

          {/* Contact Form and Info Section */}
          <div className="mt-12 md:mt-16 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-0">
            
            {/* Contact Form */}
            <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold font-serif mb-6">Get in Touch</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-left text-gray-400 text-base md:text-xl font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-lg bg-gray-900 text-white border-none outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-left text-gray-400 text-base md:text-xl font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-lg bg-gray-900 text-white border-none outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-left text-gray-400 text-base md:text-xl font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-3 h-32 rounded-lg bg-gray-900 text-white border-none outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold font-serif mb-6">Our Contact Details</h3>

              {/* Phone */}
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-orange-500 mr-3" size={24} />
                <p className="text-gray-300 text-sm md:text-lg">+91 9347733508</p>
              </div>

              {/* Email */}
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-orange-500 mr-3" size={24} />
                <p className="text-gray-300 text-sm md:text-lg">aravindkumartirunagiri03@gmail.com</p>
              </div>

              {/* Address */}
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-orange-500 mr-3" size={24} />
                <p className="text-gray-300 text-sm md:text-lg">Hyderabad City, India</p>
              </div>

              {/* Social Media */}
              <div className="mt-6 ">
                <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-6">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebookF className="text-blue-500 hover:text-white transition duration-300" size={32} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter className="text-blue-600 hover:text-white transition duration-300" size={32} />
                  </a>
                  <a href="https://www.instagram.com/aravindtirunagiri/?utm_source=qr" target="_blank" rel="noreferrer">
                    <FaInstagram className="text-pink-600 hover:text-white transition duration-300" size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
