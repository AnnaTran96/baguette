import basketReducer from '../../reducer/basketReducer';

describe('reducer', () => {
    let returnState;

    test('initialises with a default state', ()=> {
        returnState = basketReducer(undefined, {})
        expect(returnState).toEqual({items: [
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
        total: 0})
    })

    test('it can add an item to the basket', () => {
        returnState = basketReducer(undefined, {type: 'ADD_TO_BASKET', id: 1})
        expect(returnState.items[0].name).toContain('Banh Mi')
    })

    test('it can add shipping', () => {
        returnState = basketReducer(undefined, {type: 'ADD_SHIPPING'})
        expect(returnState.total).toBe(2.99)
    })

    test('it can remove shipping', () => {
        returnState = basketReducer(undefined, {type: 'SUBTRACT_SHIPPING'})
        expect(returnState.total).toBe(-2.99)
    })
})