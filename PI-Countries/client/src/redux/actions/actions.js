import axios from 'axios';

export const getAllCountries = () => async (dispatch) => {
    try {
        const response = await axios.get(
            'https://countries-a.herokuapp.com/countries'
        );
        dispatch({ type: 'GET_COUNTRIES', payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

export const getCountriesById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://countries-a.herokuapp.com/countries/${id}`
        );
        dispatch({ type: 'GET_COUNTRIES_ID', payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

export const getCountriesByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://countries-a.herokuapp.com/countries?name=${name}`
        );
        dispatch({ type: 'GET_COUNTRIES_NAME', payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

export const sort = (array) => async (dispatch) => {
    dispatch({
        type: 'SORT_ALPHABETICALLY',
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
};

export const sortZA = (array) => async (dispatch) => {
    dispatch({
        type: 'SORT_ALPHABETICALLY_ZA',
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
};

export const population = (array) => async (dispatch) => {
    dispatch({
        type: 'POPULATION',
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
};

export const populationLower = (array) => async (dispatch) => {
    dispatch({
        type: 'POPULATION_LOWER',
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
};

export const getRegions = (reg) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://countries-a.herokuapp.com/countries?region=${reg}`
        );
        dispatch({ type: 'GET_REGIONS', payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

export const resetAll = () => (dispatch) => {
    dispatch({ type: 'RESET', payload: 'ALL' });
};

export const getActivities = () => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://countries-a.herokuapp.com/activities`
        );
        dispatch({ type: 'ACTIVITIES', payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

export const filteredActivities = (activity) => async (dispatch) => {
    dispatch({ type: 'ACTIVITIES_BY_COUNTRY', payload: activity });
};
