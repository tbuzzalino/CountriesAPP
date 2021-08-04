const initialState = {
    countries: [],
    countriesId: {},
    region: [], // Te VAS A ROMPER PEDAZO DE SORETE
    reset: [],
    type: 'all',
    activities: [],
    activitiesByCountry: [],
    loading: false,
};

const filterByActivity = (activity, countries) => {
    let filtered = countries.filter((c) => {
        if (c.Activities) {
            for (let i = 0; i < c.Activities.length; i++) {
                if (c.Activities[i].name === activity) {
                    return true;
                }
            }
        } else {
            return false;
        }
    });
    return filtered;
};

const countries = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                reset: action.payload,
                loading: false,
            };

        case 'LOADING': {
            return {
                ...state,
                loading: true,
            };
        }

        case 'RESET':
            return {
                ...state,
                countries: state.reset,
                countriesId: {}, // Me vacia los paises que tenga por ID
                type: 'all',
            };

        case 'GET_COUNTRIES_ID':
            return {
                ...state,
                countriesId: action.payload,
            };

        case 'GET_COUNTRIES_NAME':
            return {
                ...state,
                countries: action.payload,
            };

        case 'GET_REGIONS':
            return {
                ...state,
                countries: action.payload,
                type: 'region',
                loading: false,
            };

        case 'SORT_ALPHABETICALLY':
            return {
                ...state,
                countries: action.payload,
                type: 'A-Z',
            };

        case 'SORT_ALPHABETICALLY_ZA':
            return {
                ...state,
                countries: action.payload,
                type: 'Z-A',
            };

        case 'POPULATION':
            return {
                ...state,
                countries: action.payload,
                type: 'UP',
            };

        case 'POPULATION_LOWER':
            return {
                ...state,
                countries: action.payload,
                type: 'LOWER',
            };

        case 'ACTIVITIES':
            return {
                ...state,
                activities: action.payload,
            };

        case 'POST_ACTIVITIES':
            return {
                ...state,
                activities: action.payload,
            };

        case 'ACTIVITIES_BY_COUNTRY':
            let newCountry = state.reset;
            let filtered = filterByActivity(action.payload, newCountry);

            return {
                ...state,
                countries: filtered,
                type: 'filtered',
            };

        default:
            return state;
    }
};

export default countries;
