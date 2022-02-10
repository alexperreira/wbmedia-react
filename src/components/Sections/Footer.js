import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

import logo from '../../assets/WB-Logo-White.png';
import instagram from '../../assets/graphics/instagram-icon.png';
import facebook from '../../assets/graphics/facebook-icon.png';

const Footer = () => {
	return (
		<React.Fragment>
			<footer className={styles.container}>
				<nav className={styles.footerNav}>
					<ul className={styles.navList}>
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
				<div className={styles.socialLinks}>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.instagram.com/bilbaowhitneyphoto/'
					>
						<img className={styles.socialIcons} src={instagram} alt='' />
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.facebook.com/bilbaowhitneyphoto'
					>
						<img src={facebook} alt='' className={styles.socialIcons} />
					</a>
				</div>
				<img src={logo} alt='' className={styles.logo} />
				<div className={styles.copyright}>
					Copyright &copy; 2022 W. Bilbao Media, LLC. All Rights Reserved. Site
					Design and Build by
					<a
						className={styles.myLink}
						target='_blank'
						rel='noreferrer'
						href='https://thealexperr.com/'
					>
						Alex Perreira
					</a>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
