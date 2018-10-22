import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addContract} from '../action'


class App extends Component {

  constructor(props) {
    super(props);

    console.log(this.props)
    this.state = {
      text: '',
    }
  }


  addContract() {   
     this.props.dispatch(addContract(this.state.text))

    // this.props.addContract();
  }
  
  render() {
  
    return (
     <div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.setState({text: event.target.value})}
            />
            
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addContract()}
          >
            Add Contract
          </button>
        </div>
       </div>
    )
  }
}

const mapStateToProps = state => {
 return {

 }
}

export default connect(mapStateToProps)(App);
