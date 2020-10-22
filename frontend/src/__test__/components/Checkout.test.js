import Checkout from '../../components/Checkout';
import React from 'react'
import { shallow } from 'enzyme';

describe('Checkout', () => {
    let component, addShipping, removeShipping, handleChange
    let props = {
        total: 2.99
    }
    beforeEach(() => {
        addShipping = jest.fn()
        removeShipping = jest.fn()
        handleChange = jest.fn()
        component = shallow(<Checkout.WrappedComponent {...props} addShipping={addShipping} removeShipping={removeShipping} handleChange={handleChange}/>);
    })

    test('it renders a food card for each item', () => {
        expect(component.find('.checkout-container')).toHaveLength(1)
    })

    test('it has a shipping cost', () => {
        expect(component.find('p').text()).toContain('2.99')
    })

    // test('it can add shipping', () => {
    //     let checked = component.find('.checked')
    //     checked.simulate('change', handleChange)
    //     expect(addShipping.mock.calls.length).toBe(1)
    // })
    
})