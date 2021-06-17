import axios from "axios";

export const getAllCountries = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/countries");
        dispatch({ type: "GET_COUNTRIES", payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

export const getCountriesById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(
            `http://localhost:3001/countries/${id}`
        );
        dispatch({ type: "GET_COUNTRIES_ID", payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

export const getCountriesByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get(
            `http://localhost:3001/countries?name=${name}`
        );
        dispatch({ type: "GET_COUNTRIES_NAME", payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

export const sort = (array) => async (dispatch) => {
    if (!array) {
        try {
            const response = await axios.get("http://localhost:3001/countries");
            dispatch({
                type: "SORT_ALPHABETICALLY",
                payload: response.data.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                }),
            });
        } catch (err) {
            console.log(err);
        }
    } else {
        dispatch({
            type: "SORT_ALPHABETICALLY",
            payload: array.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            }),
        });
    }
};
export const sortZA = (array) => async (dispatch) => {
    if (!array) {
        try {
            const response = await axios.get("http://localhost:3001/countries");
            dispatch({
                type: "SORT_ALPHABETICALLY_ZA",
                payload: response.data.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                }),
            });
        } catch (err) {
            console.log(err);
        }
    } else {
        dispatch({
            type: "SORT_ALPHABETICALLY_ZA",
            payload: array.sort((a, b) => {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            }),
        });
    }
};

export const population = (array) => async (dispatch) => {
    if (!array) {
        try {
            const response = await axios.get("http://localhost:3001/countries");
            dispatch({
                type: "POPULATION",
                payload: response.data.sort((a, b) => {
                    if (a.population < b.population) {
                        return 1;
                    }
                    if (a.population > b.population) {
                        return -1;
                    }
                    return 0;
                }),
            });
        } catch (err) {
            console.log(err);
        }
    } else {
        dispatch({
            type: "POPULATION",
            payload: array.sort((a, b) => {
                if (a.population < b.population) {
                    return 1;
                }
                if (a.population > b.population) {
                    return -1;
                }
                return 0;
            }),
        });
    }
};
export const populationLower = (array) => async (dispatch) => {
    if (!array) {
        try {
            const response = await axios.get("http://localhost:3001/countries");
            dispatch({
                type: "POPULATION_LOWER",
                payload: response.data.sort((a, b) => {
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (a.population < b.population) {
                        return -1;
                    }
                    return 0;
                }),
            });
        } catch (err) {
            console.log(err);
        }
    } else {
        dispatch({
            type: "POPULATION_LOWER",
            payload: array.sort((a, b) => {
                if (a.population > b.population) {
                    return 1;
                }
                if (a.population < b.population) {
                    return -1;
                }
                return 0;
            }),
        });
    }
};

export const getRegions = (reg) => async (dispatch) => {
    try {
        const response = await axios.get(
            `http://localhost:3001/countries?region=${reg}`
        );
        dispatch({ type: "GET_REGIONS", payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

export const resetAll = () => (dispatch) => {
    dispatch({ type: "RESET", payload: "ALL" });
};
