import React, { useState } from "react";
import SearchBar from "./ui-component/search-component";
import "./App.css";
import Catalog from "./ui-component/list-component";
import logo from "./assets/country.svg"; // Adjust the path as needed

function App() {
    // State for search term and sort order
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    // Toggle the sort order between ascending and descending
    const toggleSortOrder = () => {
        setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
    };

    return (
        <>
            
            <h1 > <img src={logo} alt="Logo" className="logo-img" /> &nbsp;  Countries Catalog</h1>
            <div className="container">
                {/* Search bar component with handlers for search and sort */}
                <SearchBar
                    searchTerm={searchTerm}
                    onSearch={setSearchTerm}
                    sortOrder={sortOrder}
                    onToggleSort={toggleSortOrder}
                />
                {/* Catalog component displaying the list of countries */}
                <Catalog searchTerm={searchTerm} sortOrder={sortOrder} />
            </div>
        </>
    );
}

export default App;

