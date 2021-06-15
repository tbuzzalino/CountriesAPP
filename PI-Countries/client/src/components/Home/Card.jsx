import React from "react";
import { useHistory } from "react-router-dom";
export const Card = ({ country, index }) => {
    const history = useHistory();

    return (
        <div
            key={index}
            className="card"
            onClick={() => history.push(`/countries/${country.id}`)}
        >
            <h2>{country.name}</h2>
            <img
                // className="flag"
                src={country.flag}
                alt={country.name}
            />
            <p>Continent: {country.region}</p>
            <p>Population: {country.population}</p>
        </div>
    );
};
