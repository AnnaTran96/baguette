import React, { Component } from 'react'

export class MenuCard extends Component {

    state = {
        data:[],
        count: 0
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
            <div>
                {this.state.data.map(data => {
                    return(
                        <div>
                            <h3>{data.fields.name}</h3>
                            <img src={data.fields.img_src} alt={data.fields.name}/>
                            <p>{data.fields.ingredients}</p>
                            <p>£{data.fields.price}.00</p>
                            <button onClick={this.decrementCount}>-</button>
                            <span>{this.state.count}</span>
                            <button onClick={this.incrementCount}>+</button>
                            <button onClick={this.resetCount}>x</button>
                        </div>
                        
                    )
                })}
                <button>Add to Basket</button>
            </div>
        )
    }
}

export default MenuCard
