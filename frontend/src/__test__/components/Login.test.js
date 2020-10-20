import Login from '../../components/Login';
import React from 'react'
import { shallow } from 'enzyme';
// import fetchMock from 'fetch-mock'

describe('Login', () => {
    let wrapper;
    let fakeEvent = { preventDefault: () => 'fake'}
    const fakeResponse = {"token": ""}
    
    beforeEach(() => {
        wrapper = shallow(<Login.WrappedComponent />);
    })

    // afterEach(() => {
    //     fetchMock.restore()
    // })

    test('it renders', () => {
        expect(wrapper.find('.login-container')).toHaveLength(1);
    });

    test('it has a state', () => {
        const instance = wrapper.instance()
        expect(instance['state']).toEqual({"username": "", "password": ""})
    })

    test('it handles input', () => {
        let input = wrapper.find('input').at(0)
        let instance = wrapper.instance()
        input.simulate('click', fakeEvent)
        expect(instance['state']).toEqual({"username": "", "password": ""})
    })
    
    // test('it fetches data from the server', () => {
    //     fetchMock.getOnce('/token-auth', {
    //         body: {username: "", password: ''},
    //         headers: {"Content-type": "application/json", 'Authorization': "Token" }
    //     })
    // })
});