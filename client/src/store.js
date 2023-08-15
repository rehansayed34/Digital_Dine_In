import {combineReducers} from 'redux';

import {createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { placeOrderReducer } from './reducers/orderReducer';

const finalReducer = combineReducers({
    placeOrderReducer: placeOrderReducer
})

const initialState = {}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store