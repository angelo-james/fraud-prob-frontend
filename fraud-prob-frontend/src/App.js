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
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea libero necessitatibus expedita possimus molestiae dicta hic laboriosam deleniti laudantium, cumque ducimus quibusdam eius explicabo, optio voluptatibus saepe quis quisquam adipisci asperiores. Quis modi nihil ex facilis vitae quo quibusdam incidunt velit, quisquam esse possimus repellat debitis minus excepturi. In, magnam."},
    {
      name: 'Event 2',
      userId: 2,
      probFraud: 0.49,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi?'},
    {
      name: 'Event 3',
      userId: 3,
      probFraud: 0.09,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi?'},
    {
      name: 'Event 4',
      userId: 4,
      probFraud: 0.99,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi?'}
    ]
  }
  componentDidMount() {
    this.getData()
  }
  getData = () => {
    axios.get('http://52.91.65.129:3333/predict')
    .then( events => { this.setState({ events: events.data })
  });
  }

  render() {
    let { events } = this.state
    return (
      <div className="text-center">
        <div className="row text-center border">
          <h1 className="navbar-brand w-50">
            Eventbrite Fraud Table
          </h1>
        </div>

        <div className="row mt-3">
        {events && events.map(event => (<FraudTable
          key={ event.object_id }
          name={ event.name } 
          object_id={ event.object_id } 
          fraud_proba={ event.fraud_proba } 
          description={ event.description }
          country={ event.country }
          currency={ event.currency }
          />))}
        </div>

      </div>
    );
  }
}

export default App;

