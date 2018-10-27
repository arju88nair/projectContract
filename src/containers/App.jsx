import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddGoal from '../components/AddGoal';
import GoalList from '../components/GoalList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const styles = theme => ({
  root: {
    flexGrow: 1,
    height:100,
    
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

      <div className={classes.root} >

      <Grid container spacing={24}>

      <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <AddGoal/>
          
          
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        </Grid>
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
