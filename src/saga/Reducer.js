import { combineReducers } from "redux"
import { ADD_TEST_VALUE, JOB_DATA_RECEIVED } from "./Actions"

const INITIAL_STATE = {
    jobs: null,
    test: null
}


const testReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TEST_VALUE: {
            return { ...state, test: action.payload }
        }
        default: return state
    }
}

const jobsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case JOB_DATA_RECEIVED: {
            return { ...state, jobs: action.payload }
        }
        default: return state
    }
}

export default combineReducers({
    test: testReducer,
    jobs: jobsReducer
})
