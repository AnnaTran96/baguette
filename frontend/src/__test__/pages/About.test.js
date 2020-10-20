import About from '../../pages/About';
import React from 'react'
import { shallow } from 'enzyme';

describe('About', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<About />);
    })

    test('it renders', () => {
        expect(wrapper.find('.about-container')).toHaveLength(1);
    });

});