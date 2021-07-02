import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getAllCountries } from "../../redux/actions/actions";
import Nav from "../Nav/Nav";
import { StyledDiv } from "./styled";

const Form = () => {
    const history = useHistory();
    const countries = useSelector((state) => state.countries);
    const dispatch = useDispatch();

    const [countriesChange, setCountriesChange] = useState({
        countriesInput: [],
    });

    const [input, setInput] = useState({
        // Estados locales del componentes
        name: "",
        duration: "",
        season: "",
        difficulty: "",
        flag: "",
        idCountry: [],
    });

    const validate = (input) => {
        let errors = {};
        if (!input.name) errors.name = "Activity is required.";
        return errors;
    };

    const [errors, setErrors] = useState({ name: false });

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    const handleClick = () => {
        history.push(`/home`);
    };

    // const handleAlert = () => {
    //     alert("Activity Created!");
    // };

    const handleSumbit = async (e) => {
        e.preventDefault();
        if (errors.name) {
            alert("Complete all the fields");
        } else {
            try {
                await axios.post(
                    `https://countries-a.herokuapp.com/activities`,
                    input
                );
                alert("Activity created.");
            } catch (err) {
                console.log(err);
            }
        }
    };

    const handleInputChange = (e) => {
        let objError = validate({ ...input, [e.target.value]: e.target.value });
        setErrors(objError);

        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleCountriesChange = (e) => {
        setCountriesChange({
            ...countriesChange,
            countriesInput: e.target.value,
        });
        setInput({
            ...input,
            idCountry: [...input.idCountry, e.target.value],
        });
    };

    return (
        <form onSubmit={(e) => handleSumbit(e)}>
            <Nav />
            <StyledDiv>
                <div>
                    <h1>Create your own activity</h1>
                    <p>
                        Please fill out all fields as required and click 'Create
                        Activity'
                    </p>
                </div>
                <div className="container">
                    <label>Activity Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <p className="danger">{errors.name} </p>}
                </div>
                <div>
                    <label>Duration: </label>
                    <select
                        type="number"
                        name="duration"
                        min="1"
                        max="24"
                        value={input.duration}
                        onChange={handleInputChange}
                    >
                        <option value="" selected disabled>
                            Select a duration...
                        </option>
                        <option value="1">1hs</option>
                        <option value="4">4hs</option>
                        <option value="8">8hs</option>
                        <option value="16">16hs</option>
                        <option value="24">24hs</option>
                    </select>
                </div>
                <div>
                    <label>Season: </label>
                    <select
                        type="number"
                        name="season"
                        value={input.season}
                        onChange={handleInputChange}
                    >
                        <option value="" selected disabled>
                            Select a season...
                        </option>
                        <option value="summer">Summer</option>
                        <option value="winter">Winter</option>
                        <option value="spring">Spring</option>
                        <option value="autumn">Autumn</option>
                    </select>
                </div>
                <div>
                    <label>Difficulty: </label>
                    <select
                        type="number"
                        name="difficulty"
                        min="1"
                        max="5"
                        value={input.difficulty}
                        onChange={handleInputChange}
                    >
                        <option value="" selected disabled>
                            Select a difficulty...
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div>
                    <label>Select countries: </label>
                    <select
                        onChange={(e) => handleCountriesChange(e)}
                        name="idCountry"
                    >
                        <option value="" selected disabled>
                            Select a country...
                        </option>
                        {countries &&
                            countries
                                .sort((a, b) => {
                                    if (a.name > b.name) {
                                        return 1;
                                    } else {
                                        return -1;
                                    }
                                })
                                .map((el, index) => {
                                    return (
                                        <option key={index} value={el.id}>
                                            {el.name} {el.id}
                                        </option>
                                    );
                                })}
                    </select>
                </div>

                <button
                    className="btn"
                    type="submit"
                    value="create-activity"
                    // onClick={() => handleAlert()}
                >
                    Create Activity
                </button>
                <button className="btn" onClick={() => handleClick()}>
                    Back to Home 🏠
                </button>
            </StyledDiv>
        </form>
    );
};

export default Form;
