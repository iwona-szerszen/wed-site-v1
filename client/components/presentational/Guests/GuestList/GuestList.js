import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import './GuestList.css';

const GuestList = props => {
	return (
		<table>
			<thead>
				<tr>
					<th>Guest' names</th>
					<th>Relationship</th>
					<th>Total members</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{props.guests.map(item => (
					<Guest key={item._id} guest={item} />
				))}
			</tbody>
		</table>
	);
};

GuestList.propTypes = {
	guests: PropTypes.array,
};

export default GuestList;