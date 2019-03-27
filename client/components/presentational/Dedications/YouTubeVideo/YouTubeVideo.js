import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

class YouTubeVideo extends Component {

	videoOnReady(event) {
		event.target.pauseVideo();
	}

	render() {

		const opts = {
			height: '200',
	    	width: '290',
	    	playerVars: {
	        	autoplay: 1
	        }
		};

		return (
			<YouTube
				videoId={this.props.videoId}
				opts={opts}
				onReady={this.videoOnReady}
			/>
		);
	}
};

YouTubeVideo.propTypes = {
	videoId: PropTypes.string,
};

export default YouTubeVideo;