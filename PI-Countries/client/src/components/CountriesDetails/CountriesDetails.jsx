import React, { useEffect } from "react";
import { getCountriesById, resetAll } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { StyledDiv } from "../CountriesDetails/styled";

const CountriesDetails = ({ index }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const idCountry = useParams();
    const countriesId = useSelector((state) => state.countriesId);

    const handleClick = () => {
        history.push(`/home`);
        dispatch(resetAll());
    };

    useEffect(() => {
        dispatch(getCountriesById(idCountry.idCountry));
    }, [dispatch, idCountry]);

    return (
        <StyledDiv key={index} className="card">
            <img
                className="flag"
                src={countriesId.flag}
                alt={countriesId.name}
            />

            <h2>{countriesId.name}</h2>
            <p>Capital: {countriesId.capital}</p>
            <p>Alpha3Code: {countriesId.id}</p>
            <p>Region: {countriesId.region}</p>
            <p>Subregion: {countriesId.subregion}</p>
            <p>Area: {countriesId.area} km</p>
            <p>Population: {countriesId.population}</p>

            <p className="activities">
                {countriesId.Activities &&
                    countriesId.Activities.map((c) => (
                        <div>
                            <h4>Activities </h4>
                            <p>Activity Name : {c.name} </p>
                            <p>Difficulty : {c.difficulty}</p>
                            <p>Duration: {c.duration} hours. </p>
                            <p>Season : {c.season}</p>
                        </div>
                    ))}
            </p>
            <div>
                <button className="btn" onClick={() => handleClick()}>
                    Back to Home 🏠
                </button>
            </div>
        </StyledDiv>
    );
};

export default CountriesDetails;
