import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {productListReducer, productDetailsReducer} from './reducers/productReducers';
// import { cartReducer } from './reducers/cartReducers';
 

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
});

export const initialState = {};

const middleware = [thunk];

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: middleware,
});

export default store