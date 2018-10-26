import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddGoal from '../components/AddGoal';
import GoalList from '../components/GoalList';

class App extends Component {
 

  render() {
    return (
      <div style={{margin: '5px'}}>
        <h3>Goal Coach</h3>
        <AddGoal />
        <hr />
        <h4>Goals</h4>
        <GoalList />
        <hr />
        
        <hr />
       
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(App);
