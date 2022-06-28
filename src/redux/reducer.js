import { combineReducers } from "redux";

const INITIAL_STATE = {
    gender: '',
    height: 100,
    weight: 30,
    age: 10
}

const genderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_GENDER': {
            return { ...state, gender: action.payload }
        }
        default: return state;
    }
}
const heightReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
}


const weightReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_WEIGHT': {
            return { ...state, weight: action.payload }
        }
        default: return state;
    }
}


const ageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_AGE': {
            return { ...state, age: action.payload }
        }
        default: return state;
    }
}

export default combineReducers({
    gender: genderReducer,
    height: heightReducer,
    weight: weightReducer,
    age: ageReducer

})