import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountdownContainer from '../../containers/CountdownContainer';
import Carousel from './Carousel/Carousel';
import styles from './Home.css';

const Home = () => {
	return (
		<Container fluid className={styles.containerFluid}>
			<Row className={styles.welcomeContainer}>
				<Col className={styles.data} md={5}>
					<div className={styles.names}>Amanda &amp; David</div>
					<div>Celebrate with Us on July 27, 2019</div>
				</Col>
				<Col className={styles.countdown} md='auto'>
					<CountdownContainer weddingDate={new Date(2019, 6, 27, 17, 0, 0)} />
				</Col>
			</Row>
			<div className={styles.carouselContainer}>
				<Carousel />
			</div>
		</Container>
	);
};

export default Home;