import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { IndexLink } from 'react-router';
import { testGuestId } from '../../../../../server/config';
import styles from './Navigation.css';

const Navigation = () => {
	return (
		<nav className={styles.navContainer}>
			<Navbar collapseOnSelect expand='sm' className={styles.navigation}>
				<Navbar.Toggle className={`ml-auto ${styles.toggleButton}`} aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
				  	<Nav className='mr-auto'>
						<IndexLink
							to='/' 
							activeClassName={styles.active}
							className={styles.link}
						>
							Home
						</IndexLink>
						<IndexLink
							to='/guests'
							activeClassName={styles.active}
							className={styles.link}
						>
							Guests
						</IndexLink>
						<IndexLink
							to='/presents'
							activeClassName={styles.active}
							className={styles.link} activeClassName={styles.active}
						>
							Presents
						</IndexLink>
						<IndexLink
							to='/dedications'
							activeClassName={styles.active}
							className={styles.link}
						>
							Dedications
						</IndexLink>
				    </Nav>
				    <Nav>
			    		<IndexLink
							to={`/guests/${testGuestId}`}
							activeClassName={styles.active}
							className={styles.yourProfile}
						>
							Your profile
						</IndexLink>
				    </Nav>
				</Navbar.Collapse>
			</Navbar>
		</nav>
	);	
};

export default Navigation;