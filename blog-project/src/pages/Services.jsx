import React from 'react';
import { FaCode, FaLaptopCode, FaMobileAlt, FaCloud } from 'react-icons/fa';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div>
    <div className="banner bg-gradient-to-r from-black via-gray-500 to-black py-32 px-4">
      <div className="text-white text-center">
        {/* Page Title */}
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Services <span className="text-orange-500">Page</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg lg:text-1xl max-w-2xl mx-auto text-gray-300">
          Explore a variety of services we offer to help you build, enhance, and optimize your digital presence. From web development to cloud solutions, we are here to support your business.
        </p>

        {/* Services Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Service 1 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <FaCode size={48} className="text-orange-500 mx-auto" />
            <h3 className="mt-6 text-xl font-semibold">Web Development</h3>
            <p className="mt-4 text-gray-400">
              Custom website development using modern technologies like HTML, CSS, JavaScript, and React.js.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <FaLaptopCode size={48} className="text-orange-500 mx-auto" />
            <h3 className="mt-6 text-xl font-semibold">UI/UX Design</h3>
            <p className="mt-4 text-gray-400 ">
              Creating user-friendly and visually stunning designs to enhance user experience and engagement.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <FaMobileAlt size={48} className="text-orange-500 mx-auto" />
            <h3 className="mt-6 text-xl font-semibold">Mobile Development</h3>
            <p className="mt-4 text-gray-400">
              Building responsive and efficient mobile applications for Android and iOS platforms.
            </p>
          </div>

          {/* Service 4 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <FaCloud size={48} className="text-orange-500 mx-auto" />
            <h3 className="mt-6 text-xl font-semibold">Cloud Solutions</h3>
            <p className="mt-4 text-gray-400">
              Providing cloud integration and migration services for scalable and secure data storage solutions.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10  ">
          <a 
            href="/contact" 
            className="inline-block bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300">
            Contact Us for More Info
          </a>
        </div>
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
