import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import DedicationList from './DedicationList/DedicationList';
import styles from './DedicationsPage.css';

const DedicationsPage = props => {
	return (
		<Container fluid className={styles.containerFluid}>
			<div className={styles.container}>
				<section className={styles.introduction}>
					<p>What songs would you like to hear at our wedding reception? We want to know your music preferences - there will be no excuses for not dancing at the party!</p>
					<p>Add your favourite song and see you on the dance floor ;-)</p>
				</section>
				<button	
					className={styles.addDedicationButton}
					onClick={props.moveToAddDedication}
				>
					Add music dedication
					<span className={styles.arrow}>❯</span>
				</button>
	  			<DedicationList dedications={props.dedications} />
	  		</div>
		</Container>
	);
};

DedicationsPage.propTypes = {
	dedications: PropTypes.array,
	moveToAddDedication: PropTypes.func,
}

export default DedicationsPage;