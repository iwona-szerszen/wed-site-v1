import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Dedication from '../../Dedications/DedicationList/Dedication';
import styles from '../../Dedications/DedicationList/Dedication.css';
import userStyles from '../UserProfile.css';

const UserDedicationList = props => {
	if (!props.userDedications.length) {
		return (
			<div className={userStyles.noItemInfo}>You have no music dedication.</div>
		);
	} else {
		return (
			<div>
				{props.userDedications.map(item => (
					<div key={item._id} className={styles.userDedicationContainer}>
						<Button 
							className={`close ${styles.closeButton}`} 
							onClick={() => props.deleteDedication(item._id)} 
							aria-label='Close'>
  								<span aria-hidden='true'>&times;</span>
						</Button>
						<Dedication key={item._id} dedication={item} />
					</div>
				))}
			</div>
		);
	}
};

UserDedicationList.propTypes = {
	userDedications: PropTypes.array,
	deleteDedication: PropTypes.func,
};

export default UserDedicationList;