import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../action/basketAction'
import Checkout from './Checkout'
import './styles/BasketCardStyle.css'

class BasketCard extends Component {

    removeItem = id => {
        this.props.removeItem(id)
    }

    addQuantity = id => {
        this.props.addQuantity(id)
    }

    subtractQuantity = id => {
        this.props.subtractQuantity(id)
    }

    render() {

        let addedItems = this.props.items.length ? (
            this.props.items.map(item => {
                return(
                    <li className="item-collection" key={item.id}>
                        <h3 className="item-title">{item.name}</h3>
                        <div className="item-img">
                            <img src={item.imgSrc} alt={item.name}/>
                        </div>
                        <div className="description-container">
                            <p>{item.ingredients}</p>
                            <p>£{parseFloat(item.price).toFixed(2)}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className="add-and-remove">
                            <Link to="/basket" onClick={() => this.subtractQuantity(item.id)} className="subtract">-</Link>
                            <Link to="/basket" onClick={() => this.addQuantity(item.id)} className="add">+</Link>
                        </div>
                        <i className="fa fa-trash" aria-hidden="true" onClick={() => this.removeItem(item.id)}></i>
                    </li>
                )
            })
        ) : ( <p className="empty-basket">Empty Basket</p>)

        return (
            <div className="basket-container">
                <h4>In your shopping basket:</h4>
                <ul className="items-collection">
                    {addedItems}
                </ul>
                <Checkout/>
            </div>
        )
    }
}

const mSTP = state => {
    return {
        items: state.addedItems,
        total: state.total
    }
}

const mDTP = dispatch => {
    return {
        removeItem: id => {dispatch(removeItem(id))},
        addQuantity: id => {dispatch(addQuantity(id))},
        subtractQuantity: id => {dispatch(subtractQuantity(id))}
    }
}

export default withRouter(connect(mSTP, mDTP)(BasketCard)
)