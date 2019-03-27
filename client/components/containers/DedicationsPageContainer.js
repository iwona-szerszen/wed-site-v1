import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { testGuestId } from '../../../server/config';

// Import Components
import DedicationsPage from '../presentational/Dedications/DedicationsPage';

// Import Actions
import { fetchDedicationsRequest } from '../../actions/DedicationActions';

// Import Selector
import { getDedications } from '../../reducers/DedicationReducer';

class DedicationsPageContainer extends Component {	
  componentDidMount() {
    this.props.dispatch(fetchDedicationsRequest());
  }
  moveToAddDedication() {
    this.context.router.push({
      pathname: `/guests/${testGuestId}`,
      state: {activeTabKey: 'dedications'},
    });
  }
  render() {
  	return (
      <DedicationsPage
        dedications={this.props.dedications}
        moveToAddDedication={this.moveToAddDedication.bind(this)}
      />
  	);
  }
};

// Actions required to provide data for this component to render in server side
DedicationsPageContainer.need = [() => { return fetchDedicationsRequest(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    dedications: getDedications(state),
  };
}

DedicationsPageContainer.propTypes = {
	dedications: PropTypes.array,
	dispatch: PropTypes.func,
};

DedicationsPageContainer.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(DedicationsPageContainer);