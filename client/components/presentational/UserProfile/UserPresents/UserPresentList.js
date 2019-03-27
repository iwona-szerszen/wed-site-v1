import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import styles from '../../Presents/PresentList/PresentList.css';
import userStyles from '../UserProfile.css';

const UserPresentCard = props => {
	return (
		<div className={styles.presentCard}>
			<img
				src={require(`../../../../../assets/images/${props.present.image}`)}
				alt={props.present.image.substring(0, props.present.image.length - 4)}
			/>
			<div className={styles.cardContent}>
				<div className={styles.name}>{props.present.name}</div>
				<div className={styles.price}>{props.present.price} &#8364;</div>
				<div className={styles.buttonContainer}>
					<Button
						variant='info'
						className={styles.cancelButton}
						onClick={() => props.cancelPresentReservation(props.present._id)}
					>
						Cancel reservation
					</Button>
				</div>
			</div>
		</div>
	);
};

UserPresentCard.propTypes = {
	present: PropTypes.object,
	cancelPresentReservation: PropTypes.func,
};

const UserPresentList = props => {
	if (!props.userPresents.length) {
		return (
			<div className={userStyles.noItemInfo}>
				You have no present reserved.<br />If you want to reserve present, please visit <Link to='/presents'>Presents</Link> .
			</div>
		);
	} else {
		return (
			<div className={styles.userPresentList}>
				{props.userPresents.map(item => (
					<UserPresentCard
						key={item._id}
						present={item}
						cancelPresentReservation={props.cancelPresentReservation}
					/>
				))}
			</div>
		);
	}
};

UserPresentList.propTypes = {
	userPresents: PropTypes.array,
	cancelPresentReservation: PropTypes.func,
};

export default UserPresentList;