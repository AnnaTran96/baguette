import Basket from '../../pages/Basket';
import React from 'react'
import { shallow } from 'enzyme';

describe('Basket', () => {
    let wrapper;
    let fakeEvent = { preventDefault: () => 'fake'}
    const props = { history: {push: jest.fn()}}
    
    beforeEach(() => {
        wrapper = shallow(<Basket.WrappedComponent {...props}/>);
    })

    test('it renders', () => {
        expect(wrapper.find('.basket-container')).toHaveLength(1);
    });

    test('click event', () => {
        let button = wrapper.find('.payBtn')
        button.simulate('click', fakeEvent)
        expect(props.history.push).toBeCalledWith('/account')
    })

});




   