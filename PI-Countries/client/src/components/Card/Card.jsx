import React from "react";
import { useHistory } from "react-router-dom";

const Card = ({ country, index }) => {
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
            <p className="region">{country.region}</p>
        </div>
    );
};

export default Card;
