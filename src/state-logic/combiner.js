import { combineReducers } from 'redux'
import { test } from './test/reducers'

import { routerStateReducer } from 'redux-router';

const reducer = combineReducers({
    router: routerStateReducer,
    test
})

export default reducer
