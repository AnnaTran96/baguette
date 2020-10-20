import Payment from '../../components/Payment';
import React from 'react'
import { shallow } from 'enzyme';

describe('Payment', () => {
    let wrapper;
    let fakeEvent = { preventDefault: () => 'fake'}
    const props = { history: {push: jest.fn()}}
    
    beforeEach(() => {
        wrapper = shallow(<Payment.WrappedComponent {...props} />);
    })

    test('it renders', () => {
        expect(wrapper.find('.payment-container')).toHaveLength(1);
    });

    test('click event', () => {
        let button = wrapper.find('.payBtn')
        button.simulate('click', fakeEvent)
        expect(props.history.push).toBeCalledWith('/order_placed')
    })

});