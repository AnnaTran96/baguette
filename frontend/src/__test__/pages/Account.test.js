import Account from '../../pages/Account';
import React from 'react'
import { shallow } from 'enzyme';

describe('Account', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Account />);
    })

    test('it imports Signup component', () => {
        expect(wrapper.find('Signup')).toHaveLength(1);
    });

});