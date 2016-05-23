import {
    TEST
} from './actions'

export const todos = (state = [], action) => {
    switch (action.type) {
        case TEST:
            return [
                ...state
            ]
        default:
            return state
    }
}
