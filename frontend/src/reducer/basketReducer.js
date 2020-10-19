import { ADD_TO_BASKET, ADD_QUANTITY, SUBTRACT_QUANTITY, REMOVE_ITEM, ADD_SHIPPING, SUBTRACT_SHIPPING } from '../action/actions'

const initState = {
    items: [
        {id: 1, name: "Banh Mi", ingredients: "Roast pork belly, pate, mayo, picked carrot and daikon, cucumber, coriander, chilli", price: 6.50, imgSrc: "https://images.unsplash.com/photo-1600454309261-3dc9b7597637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=562&q=80"},
        {id: 2, name: "French Baguette with Brie du Pommier", ingredients: "Brie, jambon de bayonne, butter, herbs", price: 4.50, imgSrc: "https://images.unsplash.com/photo-1501212483536-b333ee05cac8?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"},
        {id: 3, name: "Ham and Cheddar Baguette", ingredients: "Creamy poppyseed dressing, dijon mustard, cheddar cheese, smoked ham, salad greens", price: 3.99, imgSrc: "https://images.unsplash.com/reserve/jCCsCae7RwCDOKTCA2Ji_reggeli%20-%20sonk%C3%A1s%20szendvics.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1045&q=80"},
        {id: 4, name: "Cajun Chicken Baguette", ingredients: "Chicken breast, bell peppers, onions, paprika, garlic chicken sauce, mayonnaise", price: "5.25", imgSrc: "https://images.unsplash.com/photo-1584959370147-fcdd784b2e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
        {id: 5, name: "Salami Baguette", ingredients: "Salami, pesto, cheese, garlic, tomatoes", price: 3.50, imgSrc: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
        {id: 6, name: "Tuna Mayonnaise Baguette", ingredients: "Tuna, mayonnaise, sweetcorn", price: 3.50, imgSrc: "https://images.unsplash.com/photo-1517254456976-ee8682099819?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"},
        {id: 7, name: "Chicken and Bacon Baguette", ingredients: "Chicken, bacon, tomatoes, salad greens, mayonnaise", price: 4.25, imgSrc: "https://images.unsplash.com/photo-1595436252086-7496fb8c41e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"},
        {id: 8, name: "Prawn Cocktails Baguette", ingredients: "Prawns, Avocado, lime, dijon mustard, cream, parsley", price: 4.99, imgSrc: "https://images.unsplash.com/photo-1594147028911-c1c3061c9995?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"},
        {id: 9, name: "Roast Vegetables Baguette", ingredients: "Goat cheese, courgette, onion, asparagus, bell peppers, garlic, tomatoes, basil", price: 3.99, imgSrc: "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    ],
    addedItems: [],
    total: 0
}

const basketReducer = ( state = initState, action ) => {
    if(action.type === ADD_TO_BASKET) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity = 1
            return {...state, total: state.total + addedItem.price}
        } else {
            addedItem.quantity = 1
            let newTotal = state.total + addedItem.price
            return {...state, addedItems: [...state.addedItems, addedItem], total: newTotal}
        }
    } 
    if(action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return{...state,total: newTotal}
    }
    if(action.type === SUBTRACT_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        if(addedItem.quantity === 1){
            let newItems = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {...state, addedItems: newItems, total: newTotal}
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {...state, total: newTotal}
        }
    }
    if(action.type ===  REMOVE_ITEM) {
        let removeItem = state.addedItems.find(item => action.id === item.id)
        let newItems = state.addedItems.filter(item => action.id !== item.id)
        let newTotal = state.total - (removeItem.price * removeItem.quantity)
        return{...state, addedItems: newItems, total: newTotal}
    }
    if(action.type === ADD_SHIPPING) {
        return {...state, total: state.total + 2.99}
    }
    if(action.type === SUBTRACT_SHIPPING) {
        return {...state, total: state.total - 2.99}
    }
        return state;
}

export default basketReducer;