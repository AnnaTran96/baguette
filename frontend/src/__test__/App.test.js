import App from "../App";
import React from 'react'
import { shallow } from 'enzyme';

describe('App', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<App />);
    })

    test('it renders', () => {
        expect(wrapper.find('.App')).toHaveLength(1);
    });

});