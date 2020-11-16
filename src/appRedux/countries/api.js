import { fetchCountriesSuccess, fetchCountriesError } from "./action"

import axios from 'axios';

const ROOT_URL = "https://api.first.org/data/v1";

export const fetchCountries = () => dispatch => {

    axios.get(`${ROOT_URL}/countries`)

        .then(response => {
            dispatch(fetchCountriesSuccess(response))
        })
        .catch(error => {
            dispatch(fetchCountriesError("Something went wrong!!!"))
        })
}