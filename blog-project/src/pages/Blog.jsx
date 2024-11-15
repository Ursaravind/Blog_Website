import React from 'react'
import BlogPage from '../components/BlogPage'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <div>
    <div className="banner bg-gradient-to-r from-black via-gray-500 to-black  py-32 px-4 ">
      <div className='text-white text-center ' >
         <h1 className="text-5xl lg:text-7xl leading-snug  font-bold mb-5">
         Blog <span className='text-orange-500'> Page</span>
          </h1>
      </div>
     
    </div>
    
     <BlogPage />
     <Footer/>
   </div>
  )
}

export default Blog
