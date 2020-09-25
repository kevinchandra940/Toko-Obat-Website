import {PRODUCT_DEMAM, PRODUCT_BATUKFLU, PRODUCT_VITAMIN, PRODUCT_ASMA, PRODUCT_KULIT, PRODUCT_MATA, PRODUCT_ANTISEPTIK, PRODUCT_ANTIBIOTIK, PRODUCT_P3K} from '../actions'


const INTIAL_STATE = {
    productDemam : [],
    productBatukFlu : [],
    productVitamin : [],
    productAsma : [],
    productKulit : [],
    productMata : [],
    productAntiseptik : [],
    productAntibiotik : [],
    productP3K : [],
    
}

const productReducer = (state = INTIAL_STATE, action) =>
{
    switch(action.type){
        case PRODUCT_DEMAM : 
            return {
                ...state,
                productDemam : action.payload
                }
        case PRODUCT_BATUKFLU : 
            return {
                ...state,
                productBatukFlu : action.payload
                }
        case PRODUCT_VITAMIN : 
            return {
                ...state,
                productVitamin : action.payload
                }
        case PRODUCT_ASMA : 
            return {
                ...state,
                productAsma : action.payload
                }
        case PRODUCT_KULIT : 
            return {
                ...state,
                productKulit : action.payload
                }
        case PRODUCT_MATA : 
            return {
                ...state,
                productMata : action.payload
                }
        case PRODUCT_ANTISEPTIK : 
            return {
                ...state,
                productAntiseptik : action.payload
                }
        case PRODUCT_ANTIBIOTIK : 
            return {
                ...state,
                productAntibiotik : action.payload
                }
        case PRODUCT_P3K : 
            return {
                ...state,
                productP3K : action.payload
                }

        
        default :
            return state
    }
}

export default productReducer