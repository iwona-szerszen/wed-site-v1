import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { testGuestId } from '../../../../server/config';
import { Container, Row, Col } from 'react-bootstrap';
import Statistic from './Statistic/Statistic';
import GuestList from './GuestList/GuestList';
import styles from './GuestsPage.css';



const GuestsPage = props => {
	return (
		<Container fluid className={styles.containerFluid}>
			<Row className={styles.container}>
				<Col sm={12} md={10}>
					<Row>
						<Col className={styles.introduction}>
							<p>We are so excited for the wedding on Santorini on July 27! It will be great to celebrate with everyone who can make the trip, but if you cannot travel to Santorini within this period, we hope you will celebrate with us upon our return.</p>
							<p><strong>Please inform us about your presence at the the wedding by June 30, 2019</strong> (click R.S.V.P. button below).</p>
						</Col>
					</Row>
					<Row>
						<Col className={styles.buttonContainer}>
							<Link to={`/guests/${testGuestId}`}>
								<button	className={styles.RSVPbutton}>
										R.S.V.P.
										<span className={styles.arrow}>❯</span>
								</button>
							</Link>
						</Col>	
					</Row>
					<Row>
						<Col className={styles.guestListContainer}>
							<GuestList guests={props.guests} />
						</Col>
					</Row>
				</Col>
				<Col sm={12} md='auto' className={styles.statisticContainer}>
					<Statistic guests={props.guests} />
				</Col>
			</Row>
  		</Container>
	);
};

GuestsPage.propTypes = {
	guests: PropTypes.array,
};

export default GuestsPage;