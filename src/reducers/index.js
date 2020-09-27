import { combineReducers } from 'redux'

import userReducer from './userReducer'
import productReducer from './productReducer'
import profileReducer from './profileReducer'
import orderReducer from './orderReducer'
import paymentReducer from './paymentReducer'
import adminReducer from './adminReducer'
import kimiaReducer from './kimiaReducer'

const allReducers = combineReducers({ userReducer, productReducer, profileReducer, orderReducer,
    paymentReducer,
    adminReducer,
    kimiaReducer})

export default allReducers