import React, { useEffect } from "react";
import { getCountriesById } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./styles.css";

const CountriesDetails = ({ index }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const idCountry = useParams();
    const countriesId = useSelector((state) => state.countriesId);

    useEffect(() => {
        dispatch(getCountriesById(idCountry.idCountry));
    }, [dispatch, idCountry]);
    console.log(idCountry);
    console.log(countriesId);

    return (
        <div key={index} className="card">
            <button className="btn" onClick={() => history.push(`/home`)}>
                Back to Home
            </button>
            <img
                className="flag"
                src={countriesId.flag}
                alt={countriesId.name}
            />

            <h2>{countriesId.name}</h2>
            <p>Capital: {countriesId.capital}</p>
            <p>Alpha3Code: {countriesId.id}</p>
            <p>Subregion: {countriesId.subregion}</p>
            <p>Area: {countriesId.area} km</p>
            <p>Population: {countriesId.population}</p>

            <p>
                {countriesId.Activities &&
                    countriesId.Activities.map((c) => (
                        <div>
                            <h4>Activities:</h4>
                            <p>Nombre : {c.name} </p>
                            <p>Difficulty : {c.difficulty}</p>
                            <p>Duration: {c.duration} </p>
                            <p>Season : {c.season}</p>
                        </div>
                    ))}
            </p>
        </div>
    );
};

export default CountriesDetails;
