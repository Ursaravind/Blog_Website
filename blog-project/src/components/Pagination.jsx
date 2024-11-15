import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageRange = 10; // Number of buttons to show at a time
  const startPage = Math.floor((currentPage - 1) / pageRange) * pageRange + 1;
  const endPage = Math.min(startPage + pageRange - 1, totalPages);

  const handlePageClick = (pageNumber) => {
    if (pageNumber !== currentPage) {
      onPageChange(pageNumber);
    }
  };

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => handlePageClick(i)}
        className={`mx-1 px-3 py-1 rounded ${currentPage === i ? 'bg-orange-500  text-white' : 'bg-gray-200 hover:bg-orange-500 transition-all duration-500'}`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex justify-center my-4">
      {/* Previous button */}
      {currentPage > 1 && (
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          className="mx-1 px-3 py-1 rounded bg-gray-300"
        >
          Previous
        </button>
      )}

      {/* Render pagination buttons */}
      {pages}

      {/* Next button */}
      {currentPage < totalPages && (
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          className="mx-1 px-3 py-1 rounded bg-gray-300"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
