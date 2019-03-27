import React from 'react';
import styles from './NotFound.css';

const NotFound = () => {
	return (
		<div className={styles.containerFluid}>
			<h4>Page Not Found</h4>
			<p>You've just hit the route that doesn't exist ...</p>
		</div>
	);
};

export default NotFound;