import axios from "axios";

// Base URL for the countries API
const countriesApiUrl = "https://restcountries.com/v3.1/all";

// API service for fetching country data
const countryListApi = {
    // Function to fetch all countries
    getAllCountries: async () => {
        try {
            // Make a GET request to the countries API
            const response = await axios.get(countriesApiUrl);
            // Return the data from the response
            return response.data;
        } catch (error) {
            // Log and rethrow the error if the request fails
            console.error("Error fetching countries api:", error);
            throw error;
        }
    },
};

export default countryListApi;






