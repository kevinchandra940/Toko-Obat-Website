import Axios from 'axios'
import { GET_HISTORY, URL, GET_STOCK, HISTORY_RACIK, HISTORY_JADI } from './helper'

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
export const getHistoryJadi = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/admin/history/jadi' )
            console.log(res.data)
            dispatch({type : HISTORY_JADI, payload : res.data})
        } catch (err) {
            console.log(err)
        }
    }
}
export const getHistoryRacik = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/admin/history/kimia' )
            console.log(res.data)
            dispatch({type : HISTORY_RACIK, payload : res.data})
        } catch (err) {
            console.log(err)
        }
    }
}