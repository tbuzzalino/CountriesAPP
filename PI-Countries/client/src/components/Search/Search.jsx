import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux/actions/actions";
import { StyledDiv } from "./styled";

const Search = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    useEffect(() => {
        dispatch(getCountriesByName(input));
    }, [dispatch, input]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            dispatch(getCountriesByName(input));
        }
    };

    return (
        <StyledDiv>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    className="input"
                    type="text"
                    placeholder="Search Country..."
                    value={input}
                    name="input"
                    onChange={(e) => handleChange(e)}
                />
            </form>
        </StyledDiv>
    );
};

export default Search;
