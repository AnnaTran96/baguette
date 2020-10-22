import FoodCard from '../../components/FoodCard';
import React from 'react'
import { shallow } from 'enzyme';

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