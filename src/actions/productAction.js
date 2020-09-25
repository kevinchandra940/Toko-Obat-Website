import Axios from 'axios'

import {PRODUCT_DEMAM, PRODUCT_BATUKFLU, PRODUCT_VITAMIN, PRODUCT_ASMA, PRODUCT_KULIT, PRODUCT_MATA, PRODUCT_ANTISEPTIK, PRODUCT_ANTIBIOTIK, PRODUCT_P3K,URL} from './helper'

export const getProductDemam = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/product/demam')

            // save token into local storage
            // localStorage.setItem('id', res.data.id)
            // localStorage.setItem('token', res.data.token)

            dispatch({type : PRODUCT_DEMAM, payload : res.data})

        } catch (err) {
            console.log(err? err.response.data : err)
        }
    }
}
export const getProductBatukDanFlu = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/product/batukdanflu')

            dispatch({type : PRODUCT_BATUKFLU, payload : res.data})

        } catch (err) {
            console.log(err? err.response.data : err)
        }
    }
}
export const getProductVitamin = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/product/vitamin')


            dispatch({type : PRODUCT_VITAMIN, payload : res.data})

        } catch (err) {
            console.log(err? err.response.data : err)
        }
    }
}
export const getProductAsma = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/product/asma')

            // save token into local storage
            // localStorage.setItem('id', res.data.id)
            // localStorage.setItem('token', res.data.token)

            dispatch({type : PRODUCT_ASMA, payload : res.data})

        } catch (err) {
            console.log(err? err.response.data : err)
        }
    }
}
export const getProductKulit = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/product/kulit')

            // save token into local storage
            // localStorage.setItem('id', res.data.id)
            // localStorage.setItem('token', res.data.token)

            dispatch({type : PRODUCT_KULIT, payload : res.data})

        } catch (err) {
            console.log(err? err.response.data : err)
        }
    }
}
export const getProductMata = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/product/mata')

            // save token into local storage
            // localStorage.setItem('id', res.data.id)
            // localStorage.setItem('token', res.data.token)

            dispatch({type : PRODUCT_MATA, payload : res.data})

        } catch (err) {
            console.log(err? err.response.data : err)
        }
    }
}
export const getProductAntiseptik = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/product/antiseptik')

            // save token into local storage
            // localStorage.setItem('id', res.data.id)
            // localStorage.setItem('token', res.data.token)

            dispatch({type : PRODUCT_ANTISEPTIK, payload : res.data})

        } catch (err) {
            console.log(err? err.response.data : err)
        }
    }
}
export const getProductAntibiotik = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/product/antibiotik')


            dispatch({type : PRODUCT_ANTIBIOTIK, payload : res.data})

        } catch (err) {
            console.log(err? err.response.data : err)
        }
    }
}
export const getProductP3K = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/product/P3K')

            // save token into local storage
            // localStorage.setItem('id', res.data.id)
            // localStorage.setItem('token', res.data.token)

            dispatch({type : PRODUCT_P3K, payload : res.data})

        } catch (err) {
            console.log(err? err.response.data : err)
        }
    }
}

