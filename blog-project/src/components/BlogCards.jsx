import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const BlogCards = ({ blogs, selectedCategory, currentPage, pageSize }) => {
  console.log("Blogs:", blogs);  // Debugging
  console.log("Selected Category:", selectedCategory);
  console.log("Current Page:", currentPage, "Page Size:", pageSize);

  // Filter blogs based on category (if selected)
  const filteredBlogs = blogs.filter((post) => {
    if (!selectedCategory) return true;  // Return all if no category selected
    return post.category === selectedCategory;
  });

  // Apply pagination
  const paginatedBlogs = filteredBlogs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  console.log("Paginated Blogs:", paginatedBlogs);  // Debugging: Check paginated results

  if (paginatedBlogs.length === 0) {
    return <p className='text-5xl font-serif font-bold mx-auto mt-12 h-96 py-5 '>No blogs <span className='text-orange-500'>available</span></p>;
  }

  return (
    <div className=' card grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 m-6'>
      {paginatedBlogs.map((post, index) => (
        <Link to={`/blog/${post.id}`} key={`${post.id}-${index}`} className='card-body p-5  rounded cursor-pointer'>
          <div>
            <img src={post.image} alt={post.title} className='w-full' />
            <h3 className="mt-4 font-bold text-xl hover:text-blue-500 cursor-pointer">{post.title}</h3>
          </div>
          <div className='flex items-center mt-2'>
            <FaUser className="m-1" />
            <span>{post.author}</span>
          </div>
          <p className="text-black font-bold">{post.published_date} • {post.reading_time}</p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCards;
