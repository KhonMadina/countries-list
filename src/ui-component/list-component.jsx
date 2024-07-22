import React, { useState, useEffect, useMemo, useCallback } from "react";
import CountryService from "../api-service/country-list-api";
import Fuse from "fuse.js";
import { sortCountries, isEqualArray } from "../UtilityComponent";
import Modal from "./modal-component";
import Pagination from "./pagination-component";
import "../assets/css/ListStyle.css";

// ListComponent handles fetching, searching, sorting, and paginating country data.
const ListComponent = ({ searchTerm, sortOrder }) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25;
    const [selectedCountry, setSelectedCountry] = useState(null); // State for managing selected country for modal

    // Fetch country data on initial mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await CountryService.getAllCountries();
                setCountries(data);
            } catch (error) {
                console.error("Error fetching countries api:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filter countries based on search term
    useEffect(() => {
        const fuse = new Fuse(countries, {
            keys: ["name.official"],
            threshold: 0.4,
        });

        if (searchTerm.trim() === "") {
            setFilteredCountries(countries);
        } else {
            const results = fuse.search(searchTerm.trim());
            setFilteredCountries(results.map((result) => result.item));
        }
    }, [searchTerm, countries]);

    // Sort countries based on sort order
    useEffect(() => {
        const sortedCountries = sortCountries(filteredCountries, sortOrder);
        if (!isEqualArray(sortedCountries, filteredCountries)) {
            setFilteredCountries(sortedCountries);
        }
    }, [sortOrder, filteredCountries]);

    // Handle pagination
    const handlePaginate = useCallback((pageNumber) => {
        setCurrentPage(pageNumber);
    }, []);

    // Handle opening modal and setting selected country
    const handleOpenModal = useCallback((country) => {
        setSelectedCountry(country);
    }, []);

    // Handle closing modal
    const handleCloseModal = useCallback(() => {
        setSelectedCountry(null);
    }, []);

    // Calculate current items for the current page
    const currentItems = useMemo(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return filteredCountries.slice(indexOfFirstItem, indexOfLastItem);
    }, [currentPage, filteredCountries, itemsPerPage]);

    // Show loading indicator while fetching data
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ul className="list-component-container" >
                {currentItems.map((country) => (
                    <li key={country.cca2} onClick={() => handleOpenModal(country)}>
                        <img
                            src={country.flags.png}
                            alt={`${country.name.official} flag`}
                            style={{ width: "35px", marginRight: "15px" }}
                        />
                        {country.name.official}
                    </li >
                ))}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredCountries.length / itemsPerPage)}
                paginate={handlePaginate}
            />
            {selectedCountry && (
                <Modal country={selectedCountry} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default ListComponent;
