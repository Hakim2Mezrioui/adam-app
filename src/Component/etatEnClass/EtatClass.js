const { Component } = require("react"); // import {component} from 'react';

class EtatClass extends Component {
    constructor(props) {
        super(props);

        // const [count, setCount] = useState(0);

        this.state = {
            count: 0,
            name: "adam",
            age: 22,
        }
    }

    increment = () => {
        // setCount(count + 1)

        this.setState({...this.state, count: this.state.count + 1});
    }

    decrement = () => {
        this.setState({...this.state, count: this.state.count - 1});
    }


    initialiser = () => {
        this.setState({...this.state, count: 0});
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.initialiser}>initialiser</button>
            </>
        )
    }
}

export default EtatClass;