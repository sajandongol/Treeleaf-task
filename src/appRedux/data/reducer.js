import { INSERT_SUCCESS, UPDATE_INDEX_SUCCESS, DELETE_SUCCESS, UPDATE_SUCCESS, UPDATE_TABLE_SUCCESS } from "./types"

// const INITIAL_STATE = { all: [], successMessage: "Success Message", errorMessage: "Error Message" }

if (localStorage.getItem('listData') == null) {
    localStorage.setItem('listData', JSON.stringify([]))
}

let INITIAL_STATE = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('listData'))
}

export default function (state = INITIAL_STATE, action) {
    var list = JSON.parse(localStorage.getItem('listData'))
    switch (action.type) {
        case INSERT_SUCCESS:
            list.push(action.payload)
            localStorage.setItem('listData', JSON.stringify(list))
            return { list, currentIndex: -1 }

        case UPDATE_SUCCESS:
            list[state.currentIndex] = action.payload
            localStorage.setItem('listData', JSON.stringify(list))
            return { list, currentIndex: -1 }

        case DELETE_SUCCESS:
            list.splice(action.payload, 1)
            localStorage.setItem('listData', JSON.stringify(list))
            return { list, currentIndex: -1 }

        case UPDATE_INDEX_SUCCESS:
            return { list, currentIndex: action.payload }

        case UPDATE_TABLE_SUCCESS:
            [...list] = action.payload
            localStorage.setItem('listData', JSON.stringify(list))
            return { list, currentIndex: -1 }

        default:
            return state
    }
}