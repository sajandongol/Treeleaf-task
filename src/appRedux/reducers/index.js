import { combineReducers } from 'redux';
import CountriesReducer from "../countries/reducer"
import DataReducer from "../data/reducer"
import UserProfileReducer from "../userProfile/reducer"

const reducers = combineReducers({
    countries: CountriesReducer,
    data: DataReducer,
    profile: UserProfileReducer
});

export default reducers;