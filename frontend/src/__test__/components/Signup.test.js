import Signup from '../../components/Signup';
import React from 'react'
import { shallow } from 'enzyme';
// import fetchMock from 'fetch-mock'

describe('Signup', () => {
    let wrapper;
    let fakeEvent = { preventDefault: () => 'fake'}
    const fakeResponse = {"token": ""}
    const match={params: {username: 'anna'}, isExact: true, path: "", url: ""}
    const fetchUserFn = jest.fn(match);
    
    beforeEach(() => {
        wrapper = shallow(<Signup match={match} fetchUserFn={fetchUserFn} />);
    })

    // afterEach(() => {
    //     fetchMock.restore()
    // })

    test('it renders', () => {
        expect(wrapper.find('.signup-container')).toHaveLength(1);
    });
    test('it should call', () => {
        expect(wrapper.containsMatchingElement(<h3>New User? Register Below</h3>)).toBeTruthy()
    })

    test('it has a state', () => {
        const instance = wrapper.instance()
        expect(instance['state']).toEqual({"email": "", "password": "", "passwordTwo": "", "username": ""})
    })

    // test('it handles input', () => {
    //     let input = wrapper.find('input').at(0)
    //     let instance = wrapper.instance()
    //     input.simulate('change', fakeEvent)
    //     expect(instance['state']).toEqual({"username": "", "password": ""})
    // })
    
    // test('it fetches data from the server', () => {
    //     fetchMock.getOnce('/token-auth', {
    //         body: {username: "", password: ''},
    //         headers: {"Content-type": "application/json", 'Authorization': "Token" }
    //     })
    // })
});