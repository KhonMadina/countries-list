import React from "react";
import PropTypes from "prop-types";
import "../assets/css/SearchStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

// SearchComponent handles the search input and sort toggle functionality.
const SearchComponent = ({ searchTerm, onSearch, sortOrder, onToggleSort }) => {
    const handleChange = (e) => {
        onSearch(e.target.value);
    };

    const handleSortToggle = () => {
        onToggleSort();
    };

    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
                aria-label="Search"
            />
            <button className="search-button" onClick={handleSortToggle} aria-label="Toggle sort order">
                <FontAwesomeIcon icon={sortOrder === "asc" ? faSortUp : faSortDown} />
            </button>
        </div>
    );
};

SearchComponent.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired,
    onToggleSort: PropTypes.func.isRequired,
};

export default SearchComponent;
