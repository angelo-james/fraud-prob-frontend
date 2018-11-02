import React, { Component } from 'react';
import FraudTable from './Components/FraudTable';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    events: [{
        name: 'Event 1',
        userId: 1,
        pordFraud: 0.25,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi?'},
      {
        name: 'Event 2',
        userId: 2,
        pordFraud: 0.5,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi?'},
      {
        name: 'Event 3',
        userId: 3,
        pordFraud: 0.75,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi?'},
      {
        name: 'Event 4',
        userId: 4,
        pordFraud: 100,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi?'}
    ]
  }

  getData = () => {
    axios.get(/*insert endpoint here*/)
    .then( events => { this.setState({ events }) });
  }

  render() {
    return (
      <div className="text-center">
        <h1>Fraud Table</h1>
        <div className="container">
          <FraudTable events={ this.state.events }/>
        </div>
      </div>
    );
  }
}

export default App;

{/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}