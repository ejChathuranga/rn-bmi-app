import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducer";
import createSagaMiddleware from 'redux-saga'
import { handler } from "./sagas";



const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];

const store = createStore(reducers, {}, applyMiddleware(...middlewares))

sagaMiddleware.run(handler)

// const store = createStore(reducers)


export { store }