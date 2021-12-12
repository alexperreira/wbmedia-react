import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<React.Fragment>
			<header>
				<div className='container'>
					<img src='' alt='' className='logo' />
					<nav className='header-nav'>
						<ul>
							<li>
								<NavLink></NavLink>
							</li>
							<li>
								<a href='#'>FAQ</a>
							</li>
							<li>
								<a href='https://www.honeybook.com/widget/w_bilbao_media_llc_170936/cf_id/5fda3e235ff8e50a0f01364c'>
									Get in Touch!
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</React.Fragment>
	);
};

export default Header;
