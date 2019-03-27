import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { testGuestId } from '../../../server/config';

// Import Components
import PresentsPage from '../presentational/Presents/PresentsPage';

// Import Actions
import { fetchPresentsRequest, reservePresentRequest } from '../../actions/PresentActions';

// Import Selector
import { getPresents } from '../../reducers/PresentReducer';

class PresentsPageContainer extends Component {	
  componentDidMount() {
    this.props.dispatch(fetchPresentsRequest());
  }
  handleReservePresent(presentId) {
    this.props.dispatch(reservePresentRequest(presentId, testGuestId));
  }
  render() {
  	return (
			<PresentsPage
        presents={this.props.presents}
        handleReservePresent={this.handleReservePresent.bind(this)}
      />
  	);
  }
};

// Actions required to provide data for this component to render in server side
PresentsPageContainer.need = [() => { return fetchPresentsRequest(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    presents: getPresents(state),
  };
}

PresentsPageContainer.propTypes = {
	presents: PropTypes.array,
	dispatch: PropTypes.func,
};

PresentsPageContainer.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(PresentsPageContainer);