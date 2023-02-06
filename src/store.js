import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {productListReducer, productDetailsReducer} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer, userRegisterReducer  } from './reducers/userReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from './reducers/orderReducers';


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin:userLoginReducer,
    orderCreate: orderCreateReducer,
    userRegister: userRegisterReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer
});


const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')): {}

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []

const paymentMethodFromStorage = localStorage.getItem('paymentMEthod') ? JSON.parse(localStorage.getItem('paymentMEthod')): {}

export const initialState = {
    cart: { 
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        paymentMethod: paymentMethodFromStorage,
        userLogin:{ userinfo:userInfoFromStorage }
    }
};

const middleware = [thunk];

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: middleware,
});

export default store