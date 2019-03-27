import React from 'react';
import styles from './Countdown.css'

const StaticCard = ({ position, digit }) => {
	return (
    	<div className={styles[position]}>
    		<span>{digit}</span>
    	</div>
	);
};

const AnimatedCard = ({ position, animation, digit }) => {
	return (
		<div className={`${styles.flipCard} ${styles[animation]}`}>
    		<span>{digit}</span>
    	</div>
	);
};

const CountdownUnit = ({ digit, shuffle, unit }) => {

	// assign digit values
	let currentDigit = digit;
	let previousDigit = digit + 1;

	// to prevent a value outside scope of the unit
	if ( unit !== 'hours') {
		//previousDigit = (previousDigit === -1) ? 59 : previousDigit;
		previousDigit = (previousDigit === 60) ? 0 : previousDigit;
	} else {
		previousDigit = (previousDigit === 24) ? 0 : previousDigit;
	}
	
	// add zero
	if ( currentDigit < 10 ) {
		currentDigit = `0${currentDigit}`;
	} 
	if ( previousDigit < 10 ) {
		previousDigit = `0${previousDigit}`;
	}

	// shuffle digits
	const digit1 = shuffle ? previousDigit : currentDigit;
	const digit2 = !shuffle ? previousDigit : currentDigit;

	// shuffle animations
	const animation1 = shuffle ? 'fold' : 'unfold';
	const animation2 = !shuffle ? 'fold' : 'unfold';

	return (
		<div className={styles.countdown}>
			<div className={styles.countdownUnit}>{unit}</div>
			<div className={styles.countdownCard}>
				<StaticCard 
			    	position='upperCard' 
			    	digit={currentDigit} 
			    />
				<StaticCard 
			    	position='lowerCard'
			    	digit={previousDigit} 
			    />
				<AnimatedCard 
			    	position='first'
			    	digit={digit1}
			    	animation={animation1}
			    />
				<AnimatedCard 
			    	position='second'
			    	digit={digit2}
			    	animation={animation2}
			    />
			</div>
		</div>	
	);
};

export default CountdownUnit;