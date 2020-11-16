import { VIEW_DATA_SUCCESS } from './types'

let INITIAL_STATE = {
    data: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case VIEW_DATA_SUCCESS:
            const data = action.payload
            const index = action.index
            return { data, index }

        default:
            return state
    }
}
