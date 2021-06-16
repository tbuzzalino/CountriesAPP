import React, { useEffect } from "react";
import { getCountriesById } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StyledDiv } from "./styled";

const CountriesDetails = ({ index }) => {
    const dispatch = useDispatch();
    const idCountry = useParams();
    const countriesId = useSelector((state) => state.countriesId);

    useEffect(() => {
        dispatch(getCountriesById(idCountry.idCountry));
    }, [dispatch, idCountry]);
    console.log(countriesId);

    return (
        <StyledDiv key={index} className="card">
            <img
                className="flag"
                src={countriesId.flag}
                alt={countriesId.name}
            />

            <h2>{countriesId.name}</h2>
            <p>Capital: {countriesId.capital}</p>
            <p>Subregion: {countriesId.subregion}</p>
            <p>Capital: {countriesId.area}</p>
            <p>Continent: {countriesId.population}</p>

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
        </StyledDiv>
    );
};

export default CountriesDetails;
