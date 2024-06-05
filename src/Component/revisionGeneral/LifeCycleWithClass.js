import { Component } from "react";

class LifeCycleWithClass extends Component {
  constructor() {
    super();
    console.log("constructor");
    // const [state, setState]= useState({num: 0, name: "fdasfa", age: 18});
    this.state = {
      num: 0,
      numOfClick: 0,
    };
  }

  componentDidMount() {
    console.log("componenetDidMount");
  }

  inc = () => {
    this.setState({ num: this.state.num + 1 });
    // this.onNumOfClick();
  };

  dec = () => {
    this.setState({ num: this.state.num - 1 });
    this.onNumOfClick();
  };

  onNumOfClick = () => {
    this.setState({ numOfClick: this.state.numOfClick + 1 });
  };

  //   componentDidUpdate() {
  //     console.log("componentDidUpdate");
  //   }

  componentDidUpdate(prevState, prevProps) {
    // console.log(prevState);
    // console.log(prevProps);
    console.log("update");
  }

  shouldComponentUpdate(nextState, nextProps) {
    console.log(nextState, nextProps);

    if (false) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }

  render() {
    console.log("render");
    return (
      <>
        <h1>Life Cycle Class</h1>
        <div className="d-flex">
          <button onClick={this.inc}>+</button>
          <h1>{this.state.num}</h1>
          <button onClick={this.dec}>-</button>
        </div>
        <h2>Number Of Click: {this.state.numOfClick}</h2>
      </>
    );
  }
}

export default LifeCycleWithClass;
