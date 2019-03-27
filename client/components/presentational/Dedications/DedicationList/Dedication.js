import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo';
import styles from './Dedication.css'

const Dedication = props => {
	return (
		<Row className={styles.dedicationContainer}>
			<Col md='auto'>
				<div className={styles.video}>
					<YouTubeVideo videoId={props.dedication.videoId} />
				</div>
			</Col>
			<Col md={6} lg={7} className={styles.dedication}>
				<h5 className={styles.song}>"{props.dedication.song}"</h5>
				<div className={styles.content}>{props.dedication.content}</div>
				<div className={styles.names}>{props.dedication.from.names}</div>
			</Col>
		</Row> 
	);
};

Dedication.propTypes = {
	dedication: PropTypes.object,
};

export default Dedication;