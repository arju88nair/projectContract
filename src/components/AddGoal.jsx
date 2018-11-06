import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setGoals} from '../actions'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SimpleCard from './witness'


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  formControl: {
    minWidth: 240,
  },
});



class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        task: '',
        days:''
    },
    }
  }

  addGoal() {
    console.log('this', this);
    const { title ,email} = this.state;

    this.props.dispatch(setGoals(email,title))

    // goalRef.push({email, title});
  }



  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
   
}

handleSubmit = () => {
    // your submit logic
}



  render() {
    const { formData } = this.state;  
    const { classes } = this.props;


    return (



	<div className="wrapper">
		<div className="wrapper-inner">
			<div className="box-wrapper">
				<div className="box">
        <div class="avatar">
						<img src="https://cdn3.iconfinder.com/data/icons/bussiness-finance-line-1/1/12-512.png"></img>
					</div>
					<div className="box-inner">
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
        
        <div className="col-md-12 row  form-div d-flex justify-content-center">
         <div className="col-md-1" style={{ alignSelf: 'center' }}> I &nbsp;</div>


          <TextValidator
          className="col-md-2"
               style={{ alignSelf: 'center' }}
               placeholder="Your name"
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required']}
                    errorMessages={['Required']}
                />
    
                <div className="col-md-5"  style={{ alignSelf: 'center' ,textAlign: 'left'}}>, vouch that I will</div>

                  <TextValidator
         className="col-md-4"
               style={{ alignSelf: 'center',marginLeft:"-15%" }}
               placeholder="Do what?"
                    label="Task"
                    onChange={this.handleChange}
                    name="Task"
                    value={formData.task}
                    validators={['required']}
                    errorMessages={['Required']}
                />
    
            
      </div>
      <br></br>
      <div className="col-md-12 row  form-div d-flex justify-content-center"                style={{ alignSelf: 'center',marginLeft:"8%"  }}>
         <div className="col-md-4" style={{ alignSelf: 'center' }}> for/within </div>



                  <TextValidator
         className="col-md-1"
               style={{ alignSelf: 'center',marginLeft:"-8%"  }}
               placeholder=""
               type="number"
                    label="Days"
                    onChange={this.handleChange}
                    name="days"
                    value={formData.days}
                    validators={['required']}
                    errorMessages={['Required']}
                />
                <div className="col-md-5"  style={{ alignSelf: 'center' ,textAlign: 'left'}}>days</div>
               
            
      </div>
      <br></br>
      <div className="d-flex justify-content-center witness">
      <SimpleCard state={this.state}/>
      
      </div>
      </ValidatorForm>
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
