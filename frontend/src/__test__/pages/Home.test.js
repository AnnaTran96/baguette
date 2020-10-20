import Home from '../../pages/Home';
import React from 'react'
import { shallow } from 'enzyme';

describe('Home', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Home />);
    })

    test('it renders', () => {
        expect(wrapper.find('.home-container')).toHaveLength(1);
    });

});