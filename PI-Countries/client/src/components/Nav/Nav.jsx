import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
    const dispatch = useDispatch();
    const region = useSelector((state) => state.region);
    const handleClickOriginal = (e) => dispatch(getAllCountries());
    // const [order, setOrd] = useState('')
    // const [reg, setReg] = useState('')
    // const handleRegionChange = (e) => {
    //     let region = e.target.value
    //     let ord = document.getElementById('sort')
    //     ord.selectIndex = 0
    //     setOrd(null);
    //     setReg(region === 'Region' ? null : region)
    // }

    const handleClick = (e) => {
        if (region.length > 0) {
            dispatch(sort(region));
        } else {
            dispatch(sort());
        }
    };

    const handleClickZ = (e) => {
        if (region.length > 0) {
            dispatch(sortZA(region));
        } else {
            dispatch(sortZA());
        }
    };

    const handleClickPopulation = (e) => {
        if (region.length > 0) {
            dispatch(population(region));
        } else {
            dispatch(population());
        }
    };

    const handleClickPopulationLower = (e) => {
        if (region.length > 0) {
            dispatch(populationLower(region));
        } else {
            dispatch(populationLower());
        }
    };

    const handleRegion = (e) => dispatch(getRegions(e.target.value));

    return (
        <NavBar>
            <div className="Menu">
                Countries <span>App</span>
            </div>
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
                <option value="all">World Regions</option>
                <option value="Europe">Europe</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
                <option value="Africa">Africa</option>
            </select>
        </NavBar>
    );
};

export default Nav;
