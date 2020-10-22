import FoodCard from '../../components/FoodCard';
import React from 'react'
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'

// describe('FoodCard', () => {
//     let wrapper;
//     const mockStore = configureStore()
//     let store;
//     const initialState = {}
//     store = mockStore(initialState)
//     const props = {
//         dispatch: jest.fn(),
//         id: 1
//     }

//     beforeEach(() => {
//         store = mockStore(initialState)
//         wrapper = shallow(<FoodCard store={store} {...props}/>).dive();
//     })

//      test('it renders the title', () => {
//        expect(wrapper.findWhere( n => n.type() === 'h1' && n.contains('Menu')))
//     })


   
// });

describe('FoodCard', () => {
    let component, addToBasket
    const props = {
        items: [{ name: 'name',ingredients: 'ingredients',price: 'price', id: 'id'}]
    }
    // let stubProps = {items: [{ name: 'Banh Mi',ingredients: 'Pork',price: 5.99, id: 1}]}

    beforeEach(() => {
        addToBasket = jest.fn()
        component = shallow(<FoodCard.WrappedComponent {...props} addToBasket={addToBasket} />);
    })

    test('it renders a food card for each item', () => {
        expect(component.find('.foodcard')).toHaveLength(1)
    })

    test('it shows the name of the item', () => {
        expect(component.find('.food-name').text()).toContain('name')
    })

    test('it calls on addToBasket when button is clicked', () => {
        let button = component.find('.addBtn')
        button.simulate('click')
        expect(addToBasket.mock.calls.length).toBe(1)
    })
    
})