import React from "react";
import { NavBar } from "./styled";
import Search from "../Search/Search";
import {
    sort,
    sortZA,
    population,
    populationLower,
    getRegions,
    getAllCountries,
} from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const Nav = () => {
    const dispatch = useDispatch();
    const handleClickOriginal = (e) => dispatch(getAllCountries());
    const handleClick = (e) => dispatch(sort());
    const handleClickZ = (e) => dispatch(sortZA());
    const handleClickPopulation = (e) => dispatch(population());
    const handleClickPopulationLower = (e) => dispatch(populationLower());
    const handleRegion = (e) => dispatch(getRegions(e.target.value));
    return (
        <NavBar>
            <div className="Menu">Countries App</div>
            <Search />
            <select className="sort" placeholder="A-Z">
                <option onClick={(e) => handleClickOriginal(e)}>
                    Order alphabetically
                </option>
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
                <option value="all">Region</option>
                <option value="Europe">Europe</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Ocenia</option>
                <option value="Africa">Africa</option>
            </select>
        </NavBar>
    );
};

export default Nav;
