import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, numberOfPages, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination" role="navigation">
            <div>
                {currentPage > 1 && (

                    <a style={{cursor: 'pointer'}} onClick={() => paginate(currentPage - 1)} >
                        Previous
                    </a>

                )}
            </div>
            {numberOfPages > 1 && <div className="pagination-location">Page {currentPage} of {numberOfPages}</div>}
            <div>
                {currentPage < numberOfPages && (
                    <a style={{cursor: 'pointer'}} onClick={() => paginate(currentPage + 1)} >
                        Next
                    </a>

                )}
            </div>
        </nav>
    );
};

export default Pagination;
