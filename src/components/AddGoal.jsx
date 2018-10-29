import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setGoals} from '../actions'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});



class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      email:null
    }
  }

  addGoal() {
    console.log('this', this);
    const { title ,email} = this.state;

    this.props.dispatch(setGoals(email,title))

    // goalRef.push({email, title});
  }



  handleChange = (event) => {
    const email = event.target.value;
    this.setState({ email });
}

handleSubmit = () => {
    // your submit logic
}




  render() {
    const { email } = this.state;  
    const { classes } = this.props;


    return (



	<div className="wrapper">
		<div className="wrapper-inner">
			<div className="box-wrapper">
				<div className="box">
					<div className="box-inner">
        
        <div className="col-md-12 row inline-flex">

        
         <div col-md-2 style={{ alignSelf: 'center' }}> I &nbsp;</div>
        <TextField
               className="col-md-4 "
               style={{ alignSelf: 'center' }}
               placeholder="Name"

                />
                (&nbsp;
                
                 <TextField
               className="col-md-4 "
               style={{ alignSelf: 'center' }}           
                   placeholder="Email"

                />&nbsp;)
                

                <div className="col-md-4">KHbjkbhbkjbn</div>
            
      </div>
      
      

					</div>
				
				</div>
			</div>
		</div>
	</div>




    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}


export default connect(mapStateToProps, null)( withStyles(styles)(AddGoal));
