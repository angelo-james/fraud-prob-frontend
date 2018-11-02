import React, { Component } from 'react'

const FraudTable = (props) => (
  <div className="container">
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <div>
      <label>{props.probFraud}</label>
    </div>
  </div>
)

export default FraudTable;