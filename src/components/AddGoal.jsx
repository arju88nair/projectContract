import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setGoals} from '../actions'
// import { goalRef } from '../firebase';

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

  render() {
    return (



	<div className="wrapper">
		<div className="wrapper-inner">
			<div className="box-wrapper">
				<div className="box">
				
					<div className="box-inner">
						<h3 className="name">Christina W. Turner</h3>
            <input
            type="text"
            placeholder="Add a goal"
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({title: event.target.value})}
          />
            <input
            type="email"
            placeholder="Add your email"
            className="form-control"
            // style={{marginRight: '5px'}}
            onChange={event => this.setState({email: event.target.value})}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addGoal()}
          >
            Submit
          </button>
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


export default connect(mapStateToProps, null)(AddGoal);
