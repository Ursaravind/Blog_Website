import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards.jsx';
import Pagination from './Pagination.jsx';
import SideBar from './SideBar.jsx';
import {motion} from 'framer-motion'
const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; // Set a fixed page size (number of blogs per page)
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [totalBlogs, setTotalBlogs] = useState(0);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
            // If selectedCategory is "All", fetch all blogs
            if (selectedCategory && selectedCategory !== 'All') {
                url += `&category=${selectedCategory}`;
            }

            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data); // Assuming your API returns the full list of blogs
            setTotalBlogs(data.length); // Update total blogs count from the fetched data
        }
        fetchBlogs();
    }, [currentPage, selectedCategory]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page on category change
        setActiveCategory(category === 'All' ? null : category); // Reset active category if 'All' is selected
    };

    const totalPages = Math.ceil(totalBlogs / pageSize); // Calculate total pages

    return (
        <div

        >
            <div className='bg-black py-4'>
                <h1 className='text-center font-bold font-serif text-3xl shadow-lg mt-5 mb-3 text-white'>
                    {activeCategory ? `${activeCategory} ` : ''}<span className='text-orange-600'>Blog</span>
                </h1>
            </div>

            {/* Category Selection Buttons */}
            <div className='flex flex-wrap justify-center mt-32 lg:mt-16 mb-4'> {/* Changed to flex-wrap for responsiveness */}
                {['All', 'Health', 'Fintech', 'Startups', 'Security', 'Enterprise', 'Growth', 'Work', 'Apps', 'Gadgets'].map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={` lg:mt-5 mt-5 font-serif font-bold mx-2 px-4 py-2 rounded ${selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-400 hover:bg-orange-500 transition-all duration-500 '}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className='flex flex-col lg:flex-row gap-16'>
                <BlogCards blogs={blogs} selectedCategory={selectedCategory} currentPage={currentPage} pageSize={pageSize} />
                <div>
                    <SideBar />
                </div>
            </div>

            {/* Pagination Component */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default BlogPage;
