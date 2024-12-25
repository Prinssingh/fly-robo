import React, { useState } from 'react';
import './Pagination.css';




const Pagination = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = data.length;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`page-number ${currentPage === i ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
          aria-current={currentPage === i ? 'page' : undefined}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const currentData = data[currentPage - 1];

  return (
    <div className="pagination-container">
      <div className="content-area">
        <h2>{currentData.title}</h2>
        <p>{currentData.content}</p>
        
      </div>
      <nav className="pagination" aria-label="Pagination">
        <button
          className="nav-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Go to previous page"
        >
          Previous
        </button>
        <div className="page-numbers">
          {renderPageNumbers()}
        </div>
        <button
          className="nav-button d-flex"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;