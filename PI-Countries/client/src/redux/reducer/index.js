const initialState = {
    countries: [],
    countriesId: {},
    region: [],
    type: "all",
};

const countries = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
            };

        case "GET_COUNTRIES_ID":
            return {
                ...state,
                countriesId: action.payload,
            };

        case "GET_COUNTRIES_NAME":
            return {
                ...state,
                countries: action.payload,
            };

        case "GET_REGIONS":
            return {
                ...state,
                region: action.payload,
                type: "region",
            };

        case "SORT_ALPHABETICALLY":
            return {
                ...state,
                countries: action.payload,
                type: "A-Z",
            };

        case "SORT_ALPHABETICALLY_ZA":
            return {
                ...state,
                countries: action.payload,
                type: "Z-A",
            };

        case "POPULATION":
            return {
                ...state,
                countries: action.payload,
                type: "UP",
            };

        case "POPULATION_LOWER":
            return {
                ...state,
                countries: action.payload,
                type: "LOWER",
            };

        default:
            return state;
    }
};

export default countries;
