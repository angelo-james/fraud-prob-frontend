import React, { Component } from 'react';
import FraudTable from './Components/FraudTable';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    events: [{
        name: 'Event 1',
        userId: 1,
        probFraud: 0.25,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi?'},
      {
        name: 'Event 2',
        userId: 2,
        probFraud: 0.5,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi?'},
      {
        name: 'Event 3',
        userId: 3,
        probFraud: 0.75,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi?'},
      {
        name: 'Event 4',
        userId: 4,
        probFraud: 100,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi?'}
    ]
  }

  getData = () => {
    axios.get(/*insert endpoint here*/)
    .then( events => { this.setState({ events }) });
  }

  render() {
    let { events } = this.state
    return (
      <div className="text-center">
        <h1>Fraud Table</h1>

        <div className="container">
          <FraudTable events={ this.state.events }/>
        </div>

        <div className="row">
        {events.map(event => (<FraudTable
          key={ event.userId }
          name={ event.name } 
          userId={ event.userId } 
          probFraud={ event.probFraud } 
          description={ event.description }
          />))}
        </div>

      </div>
    );
  }
}

export default App;