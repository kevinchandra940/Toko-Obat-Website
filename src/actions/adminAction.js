import Axios from 'axios'
import { GET_HISTORY, URL, GET_STOCK } from './helper'

export const TransactionHistory = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/admin/history')
            console.log(res.data)
            dispatch({ type : GET_HISTORY, payload : res.data})
        } catch (err) {
            console.log(err ? err.response.data : err)
        }
    }
}

export const getUpdateStock = () => {
    return async(dispatch) => {
       try {
           const res = await Axios.get(URL + '/admin/stock')
           console.log(res.data)
           dispatch({type : GET_STOCK, payload : res.data})

       } catch(err) {
            console.log(err)
       }
    }
}