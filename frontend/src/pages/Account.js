import React, { Component } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'


class Account extends Component {
    
    render() {
        return(
            <>
                <Signup/>
                <Login/>
            </>
        )
    }

}

export default Account
