import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Nav } from 'react-bootstrap';
import UserConfirmation from './UserConfirmation/UserConfirmation';
import UserPresentList from './UserPresents/UserPresentList';
import AddDedication from './UserDedications/AddDedication';
import UserDedicationList from './UserDedications/UserDedicationList';
import styles from './UserProfile.css';
	
const UserProfile = props => {
	return (
		<div className={styles.containerFluid}>
				<Tab.Container
					id='user-tabs'
					activeKey={props.activeTabKey}
					onSelect={key => props.handleChangeTab(key)}
				>
					<div className={styles.container}>
				      	<Nav variant='pills' className={styles.tabNavigation}>
				        	<Nav.Item>
				        		<Nav.Link eventKey='confirmation'>Presence confirmation</Nav.Link>
				        	</Nav.Item>
				        	<Nav.Item>
				        		<Nav.Link eventKey='presents'>Reserved presents</Nav.Link>
				        	</Nav.Item>
				        	<Nav.Item>
				        		<Nav.Link eventKey='dedications'>Music dedications</Nav.Link>
				        	</Nav.Item>
				      	</Nav>
				      	<Tab.Content>
				        	<Tab.Pane eventKey='confirmation'>
				        		<UserConfirmation
				  					user={props.guest}
				  					presenceForm={props.presenceForm}
				  					onChangePresenceInput={props.handleChangePresenceInput}
				  					onSubmitConfirmPresence={props.handleSubmitConfirmPresence}
				  				/>
				        	</Tab.Pane>
				        	<Tab.Pane eventKey='presents'>
				        		<UserPresentList
				  					userPresents={props.guest.presents}
				  					cancelPresentReservation={props.handleCancelPresentReservation}
				  				/>
				        	</Tab.Pane>
				        	<Tab.Pane eventKey='dedications'>
						  		<AddDedication
						  			onSubmitAddDedication={props.handleSubmitAddDedication}
						  		/>
						  		<hr className={styles.dividingLine} />
						  		<UserDedicationList
						  			userDedications={props.guest.dedications}
						  			deleteDedication={props.handleDeleteDedication}
						  		/>
				        	</Tab.Pane>			        	
				      	</Tab.Content>
					</div>
				</Tab.Container>
			
		</div>
	);
};

UserProfile.propTypes = {
	guest: PropTypes.object,
	presenceForm: PropTypes.object,
	activeTabKey: PropTypes.string,
	handleChangeTab: PropTypes.func,
	handleChangePresenceInput: PropTypes.func,
	handleSubmitConfirmPresence: PropTypes.func,
	handleSubmitAddDedication: PropTypes.func,
	handleCancelPresentReservation: PropTypes.func,
	handleDeleteDedication: PropTypes.func,
};

export default UserProfile;