import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMenu.css';

import logo from '../../assets/WB-Submark-CMYK.png';

const Header = () => {
	return (
		<React.Fragment>
			<header className='nav-container'>
				<img src={logo} alt='' className='logo' />
				<nav className='header-nav'>
					<ul>
						<li>
							<Link to='/' className='navLink'>
								Home
							</Link>
						</li>
						<li>
							<Link to='packages' className='navLink'>
								Packages
							</Link>
						</li>
						<li>
							<Link to='faq' className='navLink'>
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
