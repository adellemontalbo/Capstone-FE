import { configureStore, combineReducer, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer =combineReducer({})
const initialState = {}
const middleware = [thunk]

const store =configureStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))