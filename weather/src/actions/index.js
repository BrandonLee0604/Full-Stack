import {START_SEARCH, FINISH_SEARCH, CLEAN_QUERY, UPDATE_SELECTION, CURRENT_WEATHER} from "./types";


export const startSearch = (queryValue) => {
    return {
        type: START_SEARCH, payload: queryValue
    };
};

export const finishSearch = (results) => {
    return {
        type: FINISH_SEARCH, payload: results
    };
};

export const cleanQuery = () => {
    return {
        type: CLEAN_QUERY
    };
};

export const updateSelection = (value) => {
    return {
        type: UPDATE_SELECTION, payload: value
    };
};
