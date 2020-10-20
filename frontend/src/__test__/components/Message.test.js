import Message from '../../components/Message';
import React from 'react'
import { shallow } from 'enzyme';

describe('Message', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Message />);
    })

    test('it renders', () => {
        expect(wrapper.find('.message-container')).toHaveLength(1);
    });

});