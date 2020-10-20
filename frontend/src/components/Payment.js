import React from 'react'
import { withRouter } from 'react-router-dom'

const Payment = (props) => {

    const handleClick = e => {
        e.preventDefault()
        props.history.push('/order_placed')
    }

    return (
       <div className="payment-container">
           <h2>Payment</h2>
           <p>Please enter your card details below</p>
           <form>
               <label for="card-name">Card Name
                   <input type="text" for="card-name" placeholder="Card Name"/>
               </label>
               <label for="card-number">Card Number
                   <input type="text" for="card-number" placeholder="0000 0000 0000 0000" maxLength="19"/>
               </label>
               <label for="card-expiry">Expiry Date
                   <input type="text" for="card-expiry" placeholder="00/00" maxLength="5"/>
               </label>
           </form>
        <button onClick={handleClick} className="payBtn">Pay Now</button>
       </div>
    )
}

export default withRouter(Payment);