import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CountdownUnit from '../presentational/Home/Countdown/CountdownUnit';
import styles from '../presentational/Home/Countdown/Countdown.css';

class CountdownContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...this.calculateDateDifference(props.weddingDate),
			daysShuffle: true,
			hoursShuffle: true,
			minutesShuffle: true,
			secondsShuffle: true,
		};
	}
	componentDidMount() {
		this.timerID = setInterval(() => this.updateTime(this.props.weddingDate), 50);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	// Calculate the difference between now (startDate) and the supplied date (endDate)
	calculateDateDifference(endDate) {
	    endDate = new Date(endDate);

	    const startDate = Date.now();
	    const difference = endDate - startDate;
	    const days = parseInt(difference / (24 * 3600 * 1000));
	    const hours = parseInt(difference / (3600 * 1000) - (days * 24));
	    const minutes = parseInt(difference / (60 * 1000) - (days * 24 * 60) - (hours * 60));
	    const seconds = parseInt(difference / (1000) - (minutes * 60) - (days * 24 * 60 * 60) - (hours * 60 * 60));

	    return {
			days,
			hours,
			minutes,
			seconds,
	    };
	}
	updateTime(endDate) {
		const { days, hours, minutes, seconds } = this.calculateDateDifference(endDate);

		// on days change, update days and shuffle state
		if (days !== this.state.days) {
			const daysShuffle = !this.state.daysShuffle;
			this.setState({
				days,
				daysShuffle,
			});
		}

		// on hour change, update hours and shuffle state
		if (hours !== this.state.hours) {
			const hoursShuffle = !this.state.hoursShuffle;
			this.setState({
				hours,
				hoursShuffle,
			});
		}

		// on minute change, update minutes and shuffle state
		if (minutes !== this.state.minutes) {
			const minutesShuffle = !this.state.minutesShuffle;
			this.setState({
				minutes,
				minutesShuffle,
			});
		}

		// on second change, update seconds and shuffle state
		if (seconds !== this.state.seconds) {
			const secondsShuffle = !this.state.secondsShuffle;
			this.setState({
				seconds,
				secondsShuffle,
			});
		}
	}
	render() {
		// state object destructuring
		const { 
			days,
			hours, 
			minutes, 
		 	seconds,
		 	daysShuffle, 
			hoursShuffle, 
			minutesShuffle, 
			secondsShuffle 
    	} = this.state;

    	return (
    		<div className={styles.countdownContainer}>
				<CountdownUnit 
					unit='days'
					digit={days} 
					shuffle={daysShuffle} 
				/>
				<CountdownUnit 
					unit='hours'
					digit={hours} 
					shuffle={hoursShuffle} 
				/>
				<CountdownUnit 
					unit='minutes'
					digit={minutes} 
					shuffle={minutesShuffle} 
				/>
				<CountdownUnit 
					unit='seconds'
					digit={seconds} 
					shuffle={secondsShuffle} 
				/>
			</div>
    	);
	}
};

CountdownContainer.propTypes = {
	weddingDate: PropTypes.instanceOf(Date),
};

export default CountdownContainer;