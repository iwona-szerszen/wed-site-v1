import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import styles from './PresentList.css';

const PresentCard = props => {
	if (!props.present.reserved) {
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
							variant='primary'
							className={styles.reserveButton}
							onClick={() => props.reservePresent(props.present._id)}
						>
							Reserve present
						</Button>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className={styles.presentCardDisabled}>
				<img
					src={require(`../../../../../assets/images/${props.present.image}`)}
					alt={props.present.image.substring(0, props.present.image.length - 4)}
				/>
				<div className={styles.cardContent}>
					<div className={styles.name}>{props.present.name}</div>
					<div className={styles.price}>{props.present.price} &#8364;</div>
					<div className={styles.buttonContainer}>
						<Button variant='secondary' disabled>Reserved</Button>
					</div>
				</div>
			</div>
		);
	}
};

PresentCard.propTypes = {
	present: PropTypes.object,
	reservePresent: PropTypes.func,
};

export default PresentCard;