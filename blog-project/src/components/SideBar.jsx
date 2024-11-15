import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
const SideBar = () => {
    const[popularBlogs,setPopularBlogs] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/blogs").then(res=>res.json()).then(data=>setPopularBlogs(data.slice(0,15)))

    },[])
  return (
    <div className='py-16 sidebar_container '>
        <h3 className='font-bold text-5xl text-center  mb-10 text-white'>Latest <span className='text-orange-500 '> Blogs</span></h3>
      <div>
        {
            popularBlogs.slice(0,10).map(blog=> <div className=' ml-11  border-b-2 border-spacing-2' key={blog.id}>
                <h4 >{blog.title}</h4>
                <Link to="/" className='flex mt-2 font-bold text-red-500 hover:text-blue-300'>Learn More <FaArrowRight className='mt-1 ml-2'/> </Link>
            </div>)
        }
      </div>
      <div>
      <h3 className='font-bold text-5xl text-center mt-10  mb-10 text-white'>Popular <span className='text-orange-500 '> Blogs</span></h3>

        {
            popularBlogs.slice(11,15).map(blog=> <div className=' ml-11 border-b-2 border-spacing-2' key={blog.id}>
                <h4 >{blog.title}</h4>
                <Link to="/" className='flex mt-2 font-bold text-red-500 hover:text-blue-300'>Learn More <FaArrowRight className='mt-1 ml-2'/> </Link>
            </div>)
        }
      </div>
    </div>
  )
}

export default SideBar
