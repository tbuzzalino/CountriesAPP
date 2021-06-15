import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux/actions/actions";
import "./search.css";

const Search = () => {
    const dispatch = useDispatch();
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
        } else {
            alert("The name of the countrie is invalid ");
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

                <button type="submit" className="button">
                    Search
                </button>
            </form>
        </div>
    );
};
export default Search;
