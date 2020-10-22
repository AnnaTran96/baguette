import BasketCard from '../../components/BasketCard';
import React from 'react'
import { shallow } from 'enzyme';

describe('BasketCard', () => {
    let component, addShipping, removeShipping
    let props = {
        items: [{name: 'Banh Mi'}],
        total: 5.99
    }
    beforeEach(() => {
        addShipping = jest.fn()
        removeShipping = jest.fn()
        component = shallow(<BasketCard.WrappedComponent {...props} addShipping={addShipping} removeShipping={removeShipping}/>);
    })

    test('it renders a food card for each item', () => {
        expect(component.find('.item-collection')).toHaveLength(1)
    })
    
})