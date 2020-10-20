import Navbar from '../../components/Navbar';
import React from 'react'
import { shallow } from 'enzyme';

describe('Navbar', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Navbar />);
    })

    test('it renders', () => {
        expect(wrapper.find('.navbar-container')).toHaveLength(1);
    });

});