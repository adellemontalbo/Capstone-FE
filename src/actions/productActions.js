import axios from 'axios'
import {
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
 } from '../constants/productConstants'

 // here we fire off our first reducers
 //if everything goes correctly, we dispatch our success call
 //if we have a custom error message we'll use that, if not we'll use our generic one

// const BASE_DIR="http://127.0.0.1:8000"

 export const listProducts = () => async (dispatch) => {
    
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products')
        // const { data } = await axios.get(`${BASE_DIR}/api/products`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })

    }

 }

 export const listProductDetails = (id) => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/products/${id}`)

        // const { data } = await axios.get(`${BASE_DIR}/api/products/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    }catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }

 }
