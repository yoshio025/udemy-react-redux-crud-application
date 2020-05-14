import React, { Component } from 'react';

//function App() {
//  return (
//    <React.Fragment>
//      <label className="bar">bar</label>
//      <input type="text" onChange={() => {console.log("I'm clicked")}}/>
//    </React.Fragment>
//  )
//}


const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  handleReset = () => {
    this.setState({count: 0})
  }

  render(){
    return(
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+</button>
        <button onClick={this.handleMinusButton}>-</button>
        <button onClick={this.handleReset}>reset</button>
      </React.Fragment>
    )
  }
}

export default App;
