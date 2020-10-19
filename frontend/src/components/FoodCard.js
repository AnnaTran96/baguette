import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToBasket } from '../action/basketAction'

class Home extends Component {

    handleClick = id => {
        this.props.addToBasket(id)
    }

    render() {

        let items = this.props.items.map(item => {
            return(
                <div className="menuCard" key={item.id}>
                    <h3>{item.name}</h3>
                    <img src={item.imgSrc} alt={item.name}/>
                    <p>{item.ingredients}</p>
                    <p>£{parseFloat(item.price).toFixed(2)}</p>
                    <button to="/" onClick={() => this.handleClick(item.id)}>Add</button>
                </div>
            )
        })    

        return (
            <div className="home-container">
                <h1>Vietguette's</h1>
                {items}
            </div>
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

export default connect(mSTP, mDTP)(Home);
