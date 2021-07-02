import React, { useEffect } from "react";
import { NavBar } from "./styled";
import Search from "../Search/Search";
import {
    sort,
    sortZA,
    population,
    populationLower,
    getRegions,
    getAllCountries,
    resetAll,
    getActivities,
    filteredActivities,
} from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Nav = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector((state) => state.countries);
    const activities = useSelector((state) => state.activities);

    const handleClickOriginal = (e) => dispatch(getAllCountries());

    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch]);

    console.log(activities);

    const handleClick = (e) => {
        dispatch(sort(countries));
    };

    const handleClickZ = (e) => {
        dispatch(sortZA(countries));
    };

    const handleClickPopulation = (e) => {
        dispatch(population(countries));
    };

    const handleClickPopulationLower = (e) => {
        dispatch(populationLower(countries));
    };

    const handleRegion = (e) => {
        if (e.target.value === "ALL") {
            dispatch(resetAll());
        } else {
            dispatch(getRegions(e.target.value));
        }
    };

    const handleActivities = (e) => {
        dispatch(filteredActivities(e.target.value));
    };

    return (
        <NavBar>
            <div className="Menu">
                Countries <span>App</span>
            </div>
            <Search />
            <select className="sort" placeholder="A-Z">
                <option onClick={(e) => handleClickOriginal(e)}>Order</option>
                <option onClick={(e) => handleClick(e)}>A-Z</option>
                <option onClick={(e) => handleClickZ(e)}>Z-A</option>
                <option onClick={(e) => handleClickPopulation(e)}>
                    Population ⬆
                </option>
                <option onClick={(e) => handleClickPopulationLower(e)}>
                    Population ⬇
                </option>
            </select>
            <select className="region" onChange={(e) => handleRegion(e)}>
                <option value="ALL">World Regions</option>
                <option value="Europe">Europe</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
                <option value="Africa">Africa</option>
                <option value="Polar">Polar</option>
            </select>
            <button className="activity" onClick={() => history.push(`/form`)}>
                Create New Activity
            </button>
            <select
                className="activities"
                onChange={(e) => handleActivities(e)}
            >
                <option onClick={(e) => handleClickOriginal(e)}>
                    Find Activities
                </option>
                {activities &&
                    activities.map((el, index) => {
                        return (
                            <option key={index} value={el.name}>
                                {el.name}
                            </option>
                        );
                    })}
            </select>
        </NavBar>
    );
};

export default Nav;
