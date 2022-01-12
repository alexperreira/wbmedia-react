import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import logo from '../../assets/WB-Submark-CMYK.png';

const Header = () => {
	return (
		<React.Fragment>
			<header className={styles.navContainer}>
				<img src={logo} alt='' className={styles.logo} />
				<nav className={styles.headerNav}>
					<ul>
						<li>
							<Link to='/' className={styles.navLink}>
								Home
							</Link>
						</li>
						<li>
							<Link to='/packages' className={styles.navLink}>
								Packages
							</Link>
						</li>
						<li>
							<Link to='/faq' className={styles.navLink}>
								FAQ
							</Link>
						</li>
						<li>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://www.honeybook.com/widget/w_bilbao_media_llc_170936/cf_id/5fda3e235ff8e50a0f01364c'
							>
								Get in touch!
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</React.Fragment>
	);
};

export default Header;
