import React, { Component } from 'react'
import './styles/MenucardStyle.css'
import Count from './Count'

export class MenuCard extends Component {

    state = {
        data:[],
        total: 0,
        basket: []
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

    render() {
        return (
            <div className="menucard-wrapper">
                <h2 className="menu-heading">Menu</h2>
                <div className="menucard-container">
                    {this.state.data.map((data,idx) => {
                        return(
                            <div className="menucard">
                                <h3 className="menu-name">{data.fields.name}</h3>
                                <img src={data.fields.img_src} alt={data.fields.name} className="menu-img"/>
                                <p className="ingredients">{data.fields.ingredients}</p>
                                <p className="price">£{data.fields.price}</p>
                                <Count key={idx}/>
                            </div>
                            
                        )
                    })}
                </div>
                <button className="basketBtn">Add to Basket</button>
            </div>
        )
    }
}

export default MenuCard;
