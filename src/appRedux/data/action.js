import { INSERT_SUCCESS, UPDATE_SUCCESS, UPDATE_INDEX_SUCCESS, DELETE_SUCCESS, UPDATE_TABLE_SUCCESS } from "./types"

export const insertSuccess = data => {

    return {
        type: INSERT_SUCCESS,
        payload: data
    }
}

export const updateSuccess = data => {
    return {
        type: UPDATE_SUCCESS,
        payload: data
    }
}

export const deleteSuccess = index => {
    return {
        type: DELETE_SUCCESS,
        payload: index
    }
}

export const updateIndexSuccess = index => {
    return {
        type: UPDATE_INDEX_SUCCESS,
        payload: index
    }
}

export const updateTableSuccess = data => {
    return {
        type: UPDATE_TABLE_SUCCESS,
        payload: data
    }
}

