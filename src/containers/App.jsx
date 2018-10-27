import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddGoal from '../components/AddGoal';
import GoalList from '../components/GoalList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../main.css'


const styles = theme => ({
  root: {
    flexGrow: 1,
    height:100
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:100
  },
});



class App extends Component {
 

  render() {  
    const { classes } = this.props;



    return (

      <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
        <div className="col-4 hidden-md-down yellow" >
           <AddGoal/>       
        </div>
        <div className="col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8">
          Form Goes Here
        </div>
      </div>
    </div>
      
    )
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  // console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(withStyles(styles)(App));
