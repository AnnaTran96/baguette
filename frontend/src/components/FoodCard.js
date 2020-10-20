import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToBasket } from '../action/basketAction'
import './styles/FoodCardStyle.css'

class FoodCard extends Component {

    handleClick = id => {
        this.props.addToBasket(id)
    }

    render() {

        let items = this.props.items.map(item => {
            return(
                <div className="foodcard-container" key={item.id}>
                    <div className="foodcard">
                        <h3 className="food-name">{item.name}</h3>
                        <img src={item.imgSrc} alt={item.name} className="food-img"/>
                        <p className="ingredients">{item.ingredients}</p>
                        <p className="price">£{parseFloat(item.price).toFixed(2)}</p>
                        <button to="/" onClick={() => this.handleClick(item.id)} className="addBtn">Add</button>
                    </div>
                </div>
            )
        })    

        return (
            <>
            <h1 className="food-heading">Menu</h1>
                <div className="items-container">
                    {items}
                </div>
            </>
        )
    }
}

const mSTP = state => {
    return {
        items: state.items
    }
}

const mDTP = dispatch => {
    return {
        addToBasket: id => dispatch(addToBasket(id))
    }
}

export default connect(mSTP, mDTP)(FoodCard);
