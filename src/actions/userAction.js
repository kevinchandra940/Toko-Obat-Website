import Axios from 'axios'
import { URL, LOGIN , REGISTER, LOGOUT } from './helper'

export const LoginAction = (body) => {
    return async(dispatch) => {
        try {
            const res = await Axios.post(URL + '/login', body)

            // save token into local storage
            localStorage.setItem('id', res.data.id)
            localStorage.setItem('token', res.data.token)

            dispatch({type : LOGIN, payload : res.data})

        } catch (err) {
            console.log(err? err.response.data : err)
        }
    }
}

export const RegisterAction = (body) => {
    return async(dispatch) => {
        try {
            const res = await Axios.post(URL + '/register', body)
            dispatch({type : REGISTER, payload : res.data})

        } catch (err) {
            console.log(err ? err.response.data : err)
        }
    }
}

export const LogoutAction = () => {
    return {
        type : LOGOUT
    }
}

export const KeepLogin = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token')

            const res = await Axios.post(URL + '/users/keeplogin', { token })
            console.log(res.data)

            dispatch({ type : LOGIN, payload : res.data })
        } catch (err) {
            localStorage.removeItem('id')
            localStorage.removeItem('token')
            dispatch({ type : LOGOUT })
            console.log(err ? 'ERROR : ' + err.response.data : err )
        }
    }
}