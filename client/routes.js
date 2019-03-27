import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppTemplate from './components/presentational/AppTemplate/AppTemplate';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
 	require.ensure = function requireModule(deps, callback) {
    	callback(require);
  	};
}

if (process.env.NODE_ENV !== 'production') {
	// Require async routes only in development for react-hot-reloader to work.
	require('./components/presentational/Home/Home');
	require('./components/containers/GuestsPageContainer');
	require('./components/containers/PresentsPageContainer');
	require('./components/containers/DedicationsPageContainer');
	require('./components/containers/UserProfileContainer');
	require('./components/presentational/NotFound/NotFound');
}

// react-router setup with code-splitting
export default (
  	<Route path='/' component={AppTemplate}>
	    <IndexRoute
	    	getComponent={(nextState, cb) => {
	        	require.ensure([], require => {
	        		cb(null, require('./components/presentational/Home/Home').default);
	        	});
	     	}}
	    />
	    <Route
	    	path='guests'
    		getComponent={(nextState, cb) => {
    			require.ensure([], require => {
    				cb(null, require('./components/containers/GuestsPageContainer').default);
    			});
    		}}
	    />
	    <Route
			path='presents'
			getComponent={(nextState, cb) => {
				require.ensure([], require => {
					cb(null, require('./components/containers/PresentsPageContainer').default);
				});
			}}
		/>
		<Route
    		path='dedications'
    		getComponent={(nextState, cb) => {
        		require.ensure([], require => {
          			cb(null, require('./components/containers/DedicationsPageContainer').default);
        		});
      		}}
    	/>
	    <Route
	    	path='guests/:id'
	    	getComponent={(nextState, cb) => {
        		require.ensure([], require => {
            		cb(null, require('./components/containers/UserProfileContainer').default);
          		});
        	}}
        />
    	<Route
    		path='*'
    		getComponent={(nextState, cb) => {
        		require.ensure([], require => {
          			cb(null, require('./components/presentational/NotFound/NotFound').default);
        		});
      		}}
    	/>
	</Route>
);