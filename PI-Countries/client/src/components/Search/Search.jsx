import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesByName, getRegions } from "../../redux/actions/actions";
import "./search.css";

const Search = () => {
    const dispatch = useDispatch();
    const region = useSelector((state) => state.region);
    const [input, setInput] = useState({ country: "" });

    useEffect(() => {
        dispatch(getCountriesByName(input.country));
    }, [dispatch, input.country]);

    const handleChange = (e) => {
        setInput({ country: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.country) {
            dispatch(getCountriesByName(input.country));
        }
        if (region.length > 0) {
            dispatch(getRegions(region));
        } else {
            alert("The name of the countrie is invalid");
        }
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    className="input"
                    type="text"
                    placeholder="Search Country..."
                    value={input.country}
                    name="input"
                    onChange={(e) => handleChange(e)}
                />

                {/* <button type="submit" className="button"></button> */}
            </form>
        </div>
    );
};
export default Search;
