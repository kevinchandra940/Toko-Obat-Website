import Axios from 'axios'
import { ADD_PAYMENT , URL, REJECTED, APPROVE, UPLOAD_BUKTI} from './helper'


export const AddPayment = (body) => {
    return async(dispatch) => {
        try {
            const res = await Axios.post(URL + '/payment', body)
            console.log(res.data)
            dispatch({type : ADD_PAYMENT, payload : res.data})
        } catch (err){
            console.log(err ? err.response.data : err)
        }
    }
}

export const approvePayment = (id, body) => {
    return async(dispatch) => {
        try {
            const res = await Axios.patch(URL + '/approve/' + id, body)
            console.log(res.data)
            dispatch({type : APPROVE})
        } catch (err){
            console.log(err ? err.response.data : err)
        }
    }
}

export const rejectPayment = (id) => {
    return async(dispatch) => {
        try {
            const res = await Axios.patch(URL + '/reject/' + id, id)
            console.log(res.data)
            dispatch({type : REJECTED})
        } catch (err){
            console.log(err ? err.response.data : err)
        }
    }
}
export const upload = (data) => {
    return async (dispatch) => {
        try {
            const option = {
                headers : { 'Content-Type' : 'multipart/form-data' }
            }
            const res = await Axios.patch(URL + '/uploadbukti/' + localStorage.getItem('id'), data, option)
            console.log(res.data)

            const bukti = await Axios.get(URL + '/upload/' + localStorage.getItem('id'))
            dispatch({ type : UPLOAD_BUKTI, payload : bukti.data }) 
        } catch (err) {
            console.log(err ? err.response.data : err) 
        }
    }
}