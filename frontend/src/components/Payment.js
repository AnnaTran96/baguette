import React from 'react'
import { withRouter } from 'react-router-dom'
import './styles/PaymentStyle.css'

const Payment = (props) => {

    const handleClick = e => {
        e.preventDefault()
        props.history.push('/order_placed')
    }

    return (
        <>
        <div className="payment-container">
            <h2>Payment</h2>
            <p>Please enter your card details below</p>
            <form>
                <label for="card-name">Card Name
                    <input type="text" for="card-name" placeholder="Card Name" className="payment-input"/>
                </label>
                <label for="card-number">Card Number
                    <input type="text" for="card-number" placeholder="0000 0000 0000 0000" maxLength="19" className="payment-input"/>
                </label>
                <label for="card-expiry">Expiry Date
                    <input type="text" for="card-expiry" placeholder="00/00" maxLength="5" className="payment-input"/>
                </label>
            </form>
        </div>
        <button onClick={handleClick} className="payBtn">Pay Now</button>
       </>
    )
}

export default withRouter(Payment);