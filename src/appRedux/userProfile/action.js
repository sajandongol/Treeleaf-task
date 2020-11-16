import { VIEW_DATA_SUCCESS } from './types'

export const viewDataSuccess = (data, index) => {

    return {
        type: VIEW_DATA_SUCCESS,
        payload: data,
        index: index
    }
}