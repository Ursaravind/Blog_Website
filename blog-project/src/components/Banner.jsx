import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
const Banner = () => {
  return (
    <div className="banner bg-gradient-to-r from-black via-gray-500 to-black  py-32 px-4 ">
      <div className='text-white text-center ' >
      <h1 className="text-5xl lg:text-7xl leading-snug  font-bold mb-5">
        Welcome to <span className='text-orange-500'> My Blog</span>
      </h1>
      <p className="lg:w-3/5 mx-auto mb-5 ">
        Discover insightful articles, tutorials, and tips on web development, technology trends, and more. 
        Stay updated and fuel your learning journey!
      </p>
      <Link to="/blog" className='font-bold '> <button className='inline-flex bg-orange-500 rounded items-center px-2 py-2 cursor-pointer'>Learn More <FaArrowRight/></button></Link>
      </div>
    </div>
  );
};

export default Banner;
