import { FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR } from "./types"

const INITIAL_STATE = { all: [], successMessage: "Success Message", errorMessage: "Error Message" }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                all: action.payload.data,
                successMessage: action.message
            }

        case FETCH_COUNTRIES_ERROR:
            return {
                ...state,
                errorMessage: action.message
            }

        default:
            return state;
    }
}