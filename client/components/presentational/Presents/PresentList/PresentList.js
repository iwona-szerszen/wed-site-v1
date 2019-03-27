import React from 'react';
import PropTypes from 'prop-types';
import PresentCard from './PresentCard';
import styles from './PresentList.css';

const PresentList = props => {
	return (
		<div className={styles.presentList}>
			{props.presents.map(item => {
				return (
					<div key={item._id}>
						<PresentCard
							present={item}
							reservePresent={props.handleReservePresent}
						/>
					</div>
				);
			})}
		</div>
	);
};

PresentList.propTypes = {
	presents: PropTypes.array,
	handleReservePresent: PropTypes.func,
};

export default PresentList;