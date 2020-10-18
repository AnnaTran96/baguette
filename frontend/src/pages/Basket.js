import React from 'react'
import { withRouter } from 'react-router-dom'

const Basket = (props) => {

    const handleClick = e => {
        e.preventDefault()
        props.history.push('/account')
    }

    return (
        <div className="basket-container">
            <button onClick={handleClick}>Pay Now</button>
        </div>
    )
}

export default withRouter(Basket);