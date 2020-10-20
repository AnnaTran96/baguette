import React from 'react'
import { BasketCard } from '../components'
import { withRouter } from 'react-router-dom'

const Basket = (props) => {

    const handleClick = e => {
        e.preventDefault()
        props.history.push('/account')
    }


    return (
        <div className="basket-container">
            <BasketCard/>
            <button onClick={handleClick} className="payBtn">Pay Now</button> 
        </div>
    )
}

export default withRouter(Basket);