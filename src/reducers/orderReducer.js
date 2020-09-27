import { CART, CART_END, CART_START, GET_CART, PLUS, MINUS, KERANJANG_KIMIA } from '../actions'

const INITIAL_STATE = {
    cart: [],
    total: null,
    order_number: null,
    loading: false,
    redirect: false,
    cart_kimia: [],
}

const orderReducer = (state = INITIAL_STATE, action) => {
    let { cart } = state
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                cart: action.payload.result,
                total: action.payload.resultDetails.total,
                order_number: action.payload.resultDetails.order_number
            }
        case CART_START:
            return { ...state, loading: true }
        case CART_END:
            return { ...state, loading: false, redirect: false }
        case CART:
            return { ...state, redirect: true }
        case PLUS:
            cart[action.payload].qty += 1
            console.log('cart :', cart[action.payload])
            return { ...state, cart }
        case MINUS:
            cart[action.payload].qty -= 1
            console.log('cart :', cart[action.payload])
            return { ...state, cart }
        case KERANJANG_KIMIA:
            return { ...state, cart_kimia: action.payload }
        default:
            return state
    }
}

export default orderReducer