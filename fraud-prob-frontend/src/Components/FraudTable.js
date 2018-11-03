import React, { Component } from 'react'

const labelColor = (num) => {
  if ((num*=100) < 0.05) {
    return "alert alert-success col-2";
  } else if ((num*=100) <= 0.09) {
    return "alert alert-warning col-2";
  } else if ((num*=100) > 0.09) {
    return "alert alert-danger col-2"
  }
}

class FraudTable extends Component{
  state = {
    open: false
  }
  
  handleToggle = () => {
    this.setState({ open: !this.state.open })
  }

  // <div className="container border mt-3 mb-2">
  render() {
    return(
      <div className = "container accordion mb-2" id = "accordionExample" >
        <div className="card">
          <div className="card-header alert alert-dark" id="headingOne">
            <h5 className="mb-0 my-auto">
              <button onClick={ this.handleToggle } className="btn btn-primary text-center mb-2" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div className="col-4 mx-auto float-left">
                  { this.props.name }
                </div>
              </button>
              <div className="container max-width">
                <label className={ labelColor(this.props.fraud_proba) }>{ `${ this.props.fraud_proba }` }</label>
              </div>
            </h5>
          </div>

          <div id="collapseOne" className={`collapse ${ this.state.open ? 'show' : 'hide' }` } aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body border-bottom">
              <p>Object ID: { this.props.object_id }</p>
              <p>Country: { this.props.country }</p>
              <p>Currency: { this.props.currency }</p>
              <h2 className="text-center">Description</h2>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
     </div>
  )}


    // <div className="row">
    //   <h3 className="col-2 m-auto">{props.name}</h3>
    //   <p className="col-2 m-auto">{props.description}</p>
    //   <div className="container">
    //     <label className={ labelColor(props.fraud_proba) }>{ props.fraud_proba }</label>
    //   </div>
    // </div>
  // </div>
    }

export default FraudTable;