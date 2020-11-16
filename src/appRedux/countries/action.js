import { FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR } from "./types"

export const fetchCountriesSuccess = (response) => {
    return {
        type: FETCH_COUNTRIES_SUCCESS,
        payload: response
    }
}

export const fetchCountriesError = (error) => {
    return {
        type: FETCH_COUNTRIES_ERROR,
        message: error
    }
}
