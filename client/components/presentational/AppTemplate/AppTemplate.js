import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

let DevTools;
if (process.env.NODE_ENV === 'development') {
	// eslint-disable-next-line global-require
	DevTools = require('./DevTools/DevTools').default;
}

const AppTemplate = props => {
	return (
		<div>
			<Helmet
				title='Wedding Site'
				meta={[
					{ charset: 'utf-8' },
					{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
		            { name: 'viewport', content: 'width=device-width, initial-scale=1' },			            
				]}
			/>
			<Navigation />
			<main>
				{props.children}
			</main>
			<Footer />
		</div>
	);
};

AppTemplate.propTypes = {
	children: PropTypes.object,
}

export default AppTemplate;