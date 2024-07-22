import React from "react";
import "../assets/css/PaginationStyle.css";

// PaginationComponent handles the pagination of items.
const PaginationComponent = ({ currentPage, totalPages, paginate }) => {
    // Handle page change
    const handlePaginate = (pageNumber) => {
        paginate(pageNumber);
    };

    return (
        <nav aria-label="Page navigation">
            <div className="pagination justify-content-right">
                <button
                    onClick={() => handlePaginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                    (pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handlePaginate(pageNumber)}
                            disabled={pageNumber === currentPage}
                        >
                            {pageNumber}
                        </button>
                    )
                )}
                <button
                    onClick={() => handlePaginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </nav>
    );
};

export default PaginationComponent;

