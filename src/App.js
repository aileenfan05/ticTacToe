import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block: [[0, 0, 0],[0, 0, 0],[0, 0, 0]],

      player1: true
    };
  }
  handleClick(row, col) {
    console.log('hi you clicked')
    var arr = this.state.block;
    var icon = (this.state.player1) ? 'O' : 'X';
    arr[row][col] = icon;
    this.setState({
      block: arr
    })
  }
  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"></p>
        <div>the actual ticTacToe
          <div> 
            <div className='blk' onClick={() => this.handleClick(0,0)}>=</div>
            <select onClick={() => this.handleClick(0,0)}>
              <option value=" " > </option>
              <option value="X">X</option>
              <option value="O">O</option>
            </select>
            <div className='blk'>=</div>
          </div>

          <div> 
            <div className='blk'></div>
            <div className='blk'></div>
            <div className='blk'></div>
          </div>

          <div> 
            <div className='blk'></div>
            <div className='blk'></div>
            <div className='blk'></div>
          </div>

        </div>
        <button>Start over!</button>
        
      </div>
    );
  }
}

export default App;
