import React from "react";
import "../assets/css/ModalStyle.css";

const ModalComponent = ({ country, onClose }) => {
    return (
        <div className="modal-component">
            <div className="modal-component-backdrop" onClick={onClose}></div>
            <div className="modal-component-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Country Details</h2>
                {country && (
                    <div className="card">
                        <img src={country.flags.png} alt={`${country.name.common} flag`} />
                        <div className="card-details">
                            <p><strong>Common Name:</strong> {country.name.common}</p>
                            <p><strong>Official Name:</strong> {country.name.official}</p>
                            <p><strong>Capital:</strong> {country.capital}</p>
                            <p><strong>Population:</strong> {country.population}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Timezones:</strong> {country.timezones.join(", ")}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalComponent;

