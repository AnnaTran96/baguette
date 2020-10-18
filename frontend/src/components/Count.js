import React, { Component } from 'react'

export class Count extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleCount(type) {
        this.setState(prevState => ({
            count: type === "increase" ? prevState.count + 1 : this.setState({count: prevState.count ? prevState.count - 1 : 0})
        }))
    }

    render() {

        const { count } = this.state;

        return (
            <div>
                <button onClick={this.handleCount.bind(this, "decrease")}>-</button>
                <span>{count}</span>
                <button onClick={this.handleCount.bind(this, "increase")}>+</button>
            </div>
        )
    }
}

export default Count
