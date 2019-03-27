import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './UserConfirmation.css';

class UserConfirmation extends Component {
	renderConfirmPresenceForm() {	
		return (
			<form
				onSubmit={event => this.props.onSubmitConfirmPresence(event)}
				className={styles.formContainer}
			>
				<div className='form-group row'>
	            	<label htmlFor='names' className='col-sm-4 col-form-label'>Name</label>
	            	<div className='col-sm-8'>
	            		<input
	                  		type='text'
	                  		className='form-control'
	                  		id='names'
	                   		value={this.props.user.names}
	                   		disabled
	                	/>
	              	</div>
	            </div>
	            <div className='form-group row'>
	            	<label htmlFor='total-members' className='col-sm-4 col-form-label'>Total members</label>
	            	<div className='col-sm-8'>
	            		<input
	                  		type='number'
	                  		className='form-control'
	                  		id='total-members'
	                  		value={this.props.user.totalMembers}
	                  	    disabled           		
	                   	/>
	              	</div>
	            </div>
	            <div className='form-group'>
		            <div className='custom-control custom-radio'>
						<input
							type='radio'
							value='true'
							onChange={event => this.props.onChangePresenceInput(event)}
							checked={this.props.presenceForm.userAttended === 'true'}
							className='custom-control-input'
							id='attended'
							name='userAttended'
							ref='presenceConfirmation'
							required
						/>
						<label
							className='custom-control-label'
							htmlFor='attended'>Yes, I am going to attended the wedding ceremony
						</label>
					</div>
					<div className='custom-control custom-radio'>
  						<input
  							type='radio'
  							value='false'
  							onChange={event => this.props.onChangePresenceInput(event)}
  							checked={this.props.presenceForm.userAttended === 'false'}
  							className='custom-control-input'
  							id='notAttended'
  							name='userAttended'
  						/>
  						<label
  							className='custom-control-label'
  							htmlFor='notAttended'>No, I will not be able to attended the wedding ceremony
  						</label>
					</div>
				</div>

	            <div className='form-group row'>
		            <div className='col-sm-12'>
		            	<button className='btn btn-success float-right'>Send</button>
		            </div>
		        </div>
			</form>
		);
	}
	renderEditConfirmation() {
		return (
			<div className={styles.editConfirmationInfo}>
				<div>You have informed us about your presence at the wedding. If you really have to edit your confirmation you can do this sending form below, but only until June 30, 2019. </div>
				{this.renderConfirmPresenceForm()}
			</div>

		);
	}
	render() {
		return (
			<div>
				{this.props.user.responded ? this.renderEditConfirmation() : this.renderConfirmPresenceForm()}
			</div>
		);
	}
};

UserConfirmation.propTypes = {
	user: PropTypes.object,
	presenceForm: PropTypes.object,
	onSubmitConfirmPresence: PropTypes.func,
	onChangePresenceInput: PropTypes.func,
};

export default UserConfirmation;