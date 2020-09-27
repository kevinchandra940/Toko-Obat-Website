import Axios from 'axios'
import { URL, GET_PROFILE, EDIT_PROFILE } from './helper'

export const getProfile = () => {
    return async (dispatch) => {
        try {
            const res = await Axios.get(URL + '/profile/' + localStorage.getItem('id'))
            console.log(res.data)
            dispatch({ type : GET_PROFILE, payload : res.data })
        } catch (err) {
            console.log(err ? err.response.data : err)
        }
    }
}

export const editProfile = (body) => {
    return async (dispatch) => {
        try {
            console.log("ini body",body)
            const res = await Axios.patch(URL + '/profile/edit/' + localStorage.getItem('id'), body)
            console.log(res.data)

            const res2 = await Axios.get(URL + '/profile/' + localStorage.getItem('id'))
            dispatch({ type : EDIT_PROFILE, payload : res2.data })
        } catch (err) {
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
            const res = await Axios.post(URL + '/profile/upload/' + localStorage.getItem('id'), data, option)
            console.log(res.data)

            const profile = await Axios.get(URL + '/profile/' + localStorage.getItem('id'))
            dispatch({ type : GET_PROFILE, payload : profile.data }) 
        } catch (err) {
            console.log(err ? err.response.data : err) 
        }
    }
}