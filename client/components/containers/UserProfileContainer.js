import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { testGuestId } from '../../../server/config';

// Import Components
import UserProfile from '../presentational/UserProfile/UserProfile';

// Import Actions
import { fetchGuestRequest, editGuestRequest } from '../../actions/GuestActions';
import { cancelPresentReservationRequest } from '../../actions/PresentActions';
import { addDedicationRequest, deleteDedicationRequest } from '../../actions/DedicationActions';

// Import Selector
import { getUserGuest } from '../../reducers/GuestReducer';

class UserProfileContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTabKey: typeof this.props.location.state !== 'undefined' ? this.props.location.state.activeTabKey : 'confirmation',
			userAttended: this.props.guest.responded ? String(this.props.guest.attended) : '',
		};
	}
	componentDidMount() {
		this.props.dispatch(fetchGuestRequest(testGuestId));
	}
	handleChangeTab(tabKey) {
		this.setState({
			activeTabKey: tabKey,
		});
	}
	handleChangePresenceInput(event) {
		this.setState({
			userAttended: event.target.value,
		});
	}
	handleSubmitConfirmPresence(event) {
		event.preventDefault();
		const guest = {
			responded: true,
			attended: this.state.userAttended,
		};
		if (confirm(`Do you want to confirm that you are ${guest.attended === 'true' ? '' : 'not'} going to be present at the wedding?`)) {
			this.props.dispatch(editGuestRequest(testGuestId, guest));
		}
	}
	handleCancelPresentReservation(presentId) {
		if (confirm('Do you want to cancel reservation of this present?')) {
			this.props.dispatch(cancelPresentReservationRequest(presentId, testGuestId));
		}
	}
	handleSubmitAddDedication(event, videoId, song, content) {
		event.preventDefault();
		const dedication = {
			videoId,
			song,
			content,
			from: this.props.guest._id,
		};
		this.props.dispatch(addDedicationRequest(dedication, testGuestId));
	}
	handleDeleteDedication(dedicationId) {
		if (confirm('Do you want to delete this dedication?')) {
			this.props.dispatch(deleteDedicationRequest(dedicationId, testGuestId));
		}
	}
	render() {
		const presenceForm = {
			userAttended: this.state.userAttended,
		};
		return (
			<UserProfile
				guest={this.props.guest}
				presenceForm={presenceForm}
				activeTabKey={this.state.activeTabKey}
				handleChangeTab={this.handleChangeTab.bind(this)}
				handleChangePresenceInput={this.handleChangePresenceInput.bind(this)}
				handleSubmitConfirmPresence={this.handleSubmitConfirmPresence.bind(this)}
				handleCancelPresentReservation={this.handleCancelPresentReservation.bind(this)}
				handleSubmitAddDedication={this.handleSubmitAddDedication.bind(this)}
				handleDeleteDedication={this.handleDeleteDedication.bind(this)}
			/>
		);
	}
};

// Actions required to provide data for this component to render in server side
UserProfileContainer.need = [() => { return fetchGuestRequest(testGuestId); }];

// Retrieve data from store as props
function mapStateToProps(state) {
	return {
		guest: getUserGuest(state),
	};
}

UserProfileContainer.propTypes = {
	guest: PropTypes.object,
	presenceForm: PropTypes.object,
	dispatch: PropTypes.func,
};

UserProfileContainer.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(UserProfileContainer);