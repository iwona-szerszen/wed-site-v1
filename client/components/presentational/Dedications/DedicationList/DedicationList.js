import React from 'react';
import PropTypes from 'prop-types';
import Dedication from './Dedication';

const DedicationList = props => {
	return (
		<div>
			{props.dedications.map(item => <Dedication key={item._id} dedication={item} />)}
		</div>
	);
};

DedicationList.propTypes = {
	dedications: PropTypes.array,
};

export default DedicationList;