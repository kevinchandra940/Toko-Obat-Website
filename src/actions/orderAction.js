import Axios from 'axios'
import { CART, 
        CART_END, 
        CART_START, 
        EDIT_CART, 
        GET_CART, 
        URL, 
        PLUS, MINUS, CHECKOUT, DELETE_CART, KIMIA_CART, KERANJANG_KIMIA, DELETE_KIMIA
    } from './helper'

export const addCart = (body) => {
    return async (dispatch) => {
        try {
            
            const res = await Axios.post(URL + '/add', body)
            console.log(res.data)
            dispatch({type : CART, payload : true})
        } catch (err) {
            console.log(err ? err.response.data : err)
        }
    }
}

export const getCart = () => {
    return async (dispatch) => {
        try {
            dispatch({type : CART_START})
            const res = await Axios.get(URL + '/cart/' + localStorage.getItem('id'))
            console.log('cart:', res.data)
            dispatch({type : GET_CART, payload : res.data})
            dispatch({type : CART_END})
        } catch (err) {
            console.log(err)
            dispatch({type : CART_END})
        }
    }
}

export const editCart = (body) => {
    return async(dispatch) => {
        try {
            dispatch({type : CART_START})
            console.log('bod', body.id)
            await Axios.patch(URL + '/edit/' + body.id, body)
            dispatch({type : EDIT_CART})

            const res = await Axios.get(URL + '/cart/' + localStorage.getItem('id'))
            console.log('cart:', res.data)
            dispatch({type : GET_CART, payload : res.data})
            dispatch({type : CART_END})
        } catch (err) {
            console.log(err ? err.response.data : err)
        }
    }
}


export const actionPlus = (index) => {
    return async(dispatch) => {
        try {
            dispatch({type : PLUS, payload : index})
        } catch(err) {
            console.log(err)
        }
    }
}

export const actionMinus = (index) => {
    return async(dispatch) => {
        try {
            dispatch({type : MINUS, payload : index})
        } catch(err) {
            console.log(err)
        }
    }
}

export const checkOutAction = (order_number) => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/checkout/' + order_number)
            dispatch({type : CHECKOUT, payload : res.data})
        } catch (err) {
            console.log(err)
        }
    }
}

export const deleteAction = (id, user_id) => {
    return async(dispatch) => {
        try {
            const del = await Axios.delete(URL + '/delete/' + id)
            console.log('del', del.data)

            // const res = await Axios.get(URL + '/cart/' + user_id)
            // console.log('deldata', res.data)
            dispatch({type : DELETE_CART})
        } catch(err) {
            console.log(err)
        }
    }
}

export const cartKimia = (body) => {
    return async(dispatch) => {
        try{
            const edit = await Axios.post(URL + '/kimiacart', body)
            console.log(edit.data)
            dispatch({type : KIMIA_CART})

            const res = await Axios.get(URL + '/kimiaker/' + localStorage.getItem('id'))
            console.log('cart:', res.data)
            dispatch({type : KERANJANG_KIMIA, payload : res.data})
        } catch (err) {
            console.log(err)
        }
    }
}


export const getCartKimia = () => {
    return async (dispatch) => {
        try {
            const res = await Axios.get(URL + '/kimiaker/' + localStorage.getItem('id'))
            console.log('cart:', res.data)
            dispatch({type : KERANJANG_KIMIA, payload : res.data})
        } catch (err) {
            console.log(err)
        }
    }
}

export const deleteActionKimia = (id, user_id) => {
    return async(dispatch) => {
        try {
            const del = await Axios.delete(URL + '/delkimia/' + id)
            console.log('del', del.data)
            dispatch({type : DELETE_KIMIA})
        } catch(err) {
            console.log(err)
        }
    }
}