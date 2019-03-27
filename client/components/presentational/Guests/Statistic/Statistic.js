import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faQuestion } from '@fortawesome/free-solid-svg-icons';
import styles from './Statistic.css';


const Statistic = props => {
	let invitedGuests = 0;
	let noResponseGuests = 0;
	let acceptedGuests = 0;
	let declinedGuests;

	props.guests.forEach(guest => {
		invitedGuests += guest.totalMembers;
		if (!guest.responded) {
			noResponseGuests += guest.totalMembers;
		} else {
			if (guest.attended) {
				acceptedGuests += guest.totalMembers;
			}
		}
	});

	declinedGuests = invitedGuests - noResponseGuests - acceptedGuests;

	return (
		<Container className={styles.statistic}>
			<Row>
				<Col>
					<div className={styles.figures}>
						<h4>{invitedGuests}</h4>
						<p>Invited</p>
					</div>
				</Col>
				<Col>
					<div className={styles.figures}>
    					<h4>{acceptedGuests}</h4>
						<p>Accepted</p>
						<FontAwesomeIcon icon={faCheck} />
					</div>
				</Col>
				<Col>
					<div className={styles.figures}>
    					<h4>{declinedGuests}</h4>
						<p>Declined</p>
						<FontAwesomeIcon icon={faTimes} />
					</div>
				</Col>
				<Col>
					<div className={styles.figures}>
    					<h4>{noResponseGuests}</h4>
						<p>No<br /> response</p>
						<FontAwesomeIcon icon={faQuestion} />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

Statistic.propTypes = {
	guests: PropTypes.array,
};

export default Statistic;