import { Component } from "react";

class Calculatrice extends Component {

    constructor() {
        super()
        this.state = {
            valeurCache: 0,
            operation: null,
        }
    }

    takeValue = (e) => {
        this.setState({...this.state, valeurCache: e.target.value})
    }

    plus = () => {
        
    }

    moins = () => {

    }

    fois = () => {

    }

    egal = () => {

    }

    render() {
        return (
            <>
                <input onChange={this.takeValue} />
                <br/>
                <button onClick={this.plus}>+</button>
                <button onClick={this.moins}>-</button>
                <button onClick={this.fois}>*</button>
                <button onClick={this.egal}>=</button>
            </>
        )
    }
}

export default Calculatrice;