import { ADD_TO_BASKET, ADD_QUANTITY, SUBTRACT_QUANTITY, REMOVE_ITEM, ADD_SHIPPING, SUBTRACT_SHIPPING } from './actions'

export const addToBasket = id => {
    return {
        type: ADD_TO_BASKET, id
    }
}

export const addQuantity = id => {
    return {
        type: ADD_QUANTITY, id
    }
}

export const subtractQuantity = id => {
    return {
        type: SUBTRACT_QUANTITY, id
    }
}

export const removeItem = id => {
    return {
        type: REMOVE_ITEM, id
    }
}

export const addShipping = () => {
    return {
        type: ADD_SHIPPING
    }
}

export const subtractShipping = () => {
    return {
        type: SUBTRACT_SHIPPING
    }
}