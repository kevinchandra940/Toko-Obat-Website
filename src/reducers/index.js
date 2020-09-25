import { combineReducers } from 'redux'

import userReducer from './userReducer'
import productReducer from './productReducer'
import profileReducer from './profileReducer'

const allReducers = combineReducers({ userReducer, productReducer, profileReducer})

export default allReducers