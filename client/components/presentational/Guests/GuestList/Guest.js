import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faQuestion } from '@fortawesome/free-solid-svg-icons';
import './GuestList.css';

const Guest = props => {

	let guestStatus;

	// asigning FontAwesomeIcon depended on guest's responded and attended attributes
	if (props.guest.responded) {
		guestStatus = props.guest.attended ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />;
	} else {
		guestStatus = <FontAwesomeIcon icon={faQuestion} />;
	}

	return (
		<tr>
			<td>{props.guest.names}</td>
			<td>{props.guest.relationship}</td>
			<td>{props.guest.totalMembers}</td>
			<td>{guestStatus}</td>
		</tr>
	);
};

Guest.propTypes = {
	guest: PropTypes.object,
};

export default Guest;