import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Component
import GuestsPage from '../presentational/Guests/GuestsPage';

// Import Actions
import { fetchGuestsRequest } from '../../actions/GuestActions';

// Import Selector
import { getGuests } from '../../reducers/GuestReducer';

class GuestsPageContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchGuestsRequest());
  }
  render() {
  	return (
      <GuestsPage 
        guests={this.props.guests}
      />
  	);
  }
};

// Actions required to provide data for this component to render in server side
GuestsPageContainer.need = [() => { return fetchGuestsRequest(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    guests: getGuests(state),
  };
}

GuestsPageContainer.propTypes = {
	guests: PropTypes.array,
	dispatch: PropTypes.func,
};

GuestsPageContainer.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(GuestsPageContainer);