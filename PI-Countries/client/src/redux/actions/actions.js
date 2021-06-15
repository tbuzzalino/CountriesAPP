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

export const sort = () => async (dispatch) => {
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
};
export const sortZA = () => async (dispatch) => {
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
};
export const population = () => async (dispatch) => {
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
};
export const populationLower = () => async (dispatch) => {
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
