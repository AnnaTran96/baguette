import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './styles/CheckoutStyle.css'

class Checkout extends Component {

    handleChecked = e => {
        if(e.target.checked) {
            this.props.addShipping();
        } else {
            this.props.subtractShipping()
        }
    }

    componentWillUnmount() {
        if(this.refs.shipping.checked) {
            this.props.subtractShipping()
        }
    }

    render() {
      
        return (
            <div className="checkout-container">
                <span><input type="checkbox" name="shipping" ref="shipping" onChange={this.handleChecked} className="checked"/>
                Delivery costs: £2.99</span>
                <p>Total Costs: £{parseFloat(this.props.total).toFixed(2)}</p>
            </div>
        )
    }
}

const mSTP = state => {
    return {
        total: state.total
    }
}

const mDTP = dispatch => {
    return {
        addShipping: () => {dispatch({type: "ADD_SHIPPING"})},
        subtractShipping: () => {dispatch({type: "SUBTRACT_SHIPPING"})},
    }
}

export default withRouter(connect(mSTP, mDTP)(Checkout))
