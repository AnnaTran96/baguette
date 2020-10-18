import React, { Component } from 'react'
import './styles/MenucardStyle.css'
import Count from './Count'

export class MenuCard extends Component {

    state = {
        data:[],
        count: 0,
        total: 0
    }

    componentDidMount() {
        
        const options = {
            method: 'GET',
            headers: { "Content-type": "application/json"}
        }

        fetch('http://localhost:8000/menu', options)
            .then((res) => res.json())
            .then(APIdata => this.setState({data: APIdata}))
            .catch(err => console.warn(err))
    }

    incrementCount = e => {
        e.preventDefault()
        this.setState({count: this.state.count + 1})
    }

    decrementCount = e => {
        e.preventDefault()
        this.setState({count: this.state.count - 1})
    }

    resetCount = e => {
        e.preventDefault()
        this.setState({count: 0})
    }

    render() {
        return (
            <div className="menucard-wrapper">
                <h2 className="menu-heading">Baguette's Menu</h2>
                <div className="menucard-container">
                    {this.state.data.map((data,idx) => {
                        return(
                            <div className="menucard">
                                <h3 className="menu-name">{data.fields.name}</h3>
                                <img src={data.fields.img_src} alt={data.fields.name} className="menu-img"/>
                                <p className="ingredients">{data.fields.ingredients}</p>
                                <p className="price">£{data.fields.price}.00</p>
                                <Count key={idx}/>
                            </div>
                            
                        )
                    })}
                </div>
                <h4 className="total-costs">Total costs: £{this.state.total}.00</h4> 
                <button className="basketBtn">Add to Basket</button>
            </div>
        )
    }
}

export default MenuCard;
