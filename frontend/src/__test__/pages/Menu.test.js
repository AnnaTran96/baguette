import Menu from '../../pages/Menu';
import React from 'react'
import { shallow } from 'enzyme';

describe('Menu', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Menu />);
    })

    test('it renders imported component', () => {
        expect(wrapper.find('.menu-wrapper')).toHaveLength(1);
    });

});




   