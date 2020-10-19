import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Checkout extends Component {

    handleClick = e => {
        e.preventDefault()
        this.props.history.push('/account')
    }

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
                <p>Minimum spend £10</p>
                <input type="checkbox" name="shipping" ref="shipping" onChange={this.handleChecked}/>
                <span>Delivery costs: £2.99</span>
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
