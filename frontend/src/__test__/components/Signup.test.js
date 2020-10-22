import Signup from '../../components/Signup';
import React from 'react'
import { shallow } from 'enzyme';

describe('Signup', () => {
    let wrapper;
    const match={params: {username: 'anna'}, isExact: true, path: "", url: ""}
    const fetchUserFn = jest.fn(match);
    
    beforeEach(() => {
        wrapper = shallow(<Signup match={match} fetchUserFn={fetchUserFn} />);
    })

    test('it should call', () => {
        expect(wrapper.containsMatchingElement(<h3>New User? Register Below</h3>)).toBeTruthy()
    })

    test('it has a state', () => {
        const instance = wrapper.instance()
        expect(instance['state']).toEqual({"email": "", "password": "", "passwordTwo": "", "username": ""})
    })
});