import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import PresentList from './PresentList/PresentList';
import styles from './PresentsPage.css';

const PresentsPage = props => {
	return (
		<Container fluid className={styles.containerFluid}>
			<div className={styles.container}>
				<section className={styles.introduction}>
					<p>What we want most for our wedding is to have all of our friends and family there in Santorini to celebrate the occasion with us, and so, more than anything, we would simply enjoy your presence.</p>
					<p>If you insist on giving us a wedding gift, we've provided a few suggestions below.</p>
				</section>
				<PresentList
					presents={props.presents}
					handleReservePresent={props.handleReservePresent}
				/>
			</div>
		</Container>
	);
};

PresentsPage.propTypes = {
	presents: PropTypes.array,
	handleReservePresent: PropTypes.func,
};

export default PresentsPage;