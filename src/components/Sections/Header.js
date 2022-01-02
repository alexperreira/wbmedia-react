import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Header.module.css';
import logo from '../../assets/WB-Submark-CMYK.png';

const Header = () => {
	return (
		<React.Fragment>
			<header>
				<Router>
					<div className='container'>
						<img src={logo} alt='' className='logo' />
						<nav className='header-nav'>
							<Switch>
								<Route path='/about'>
									<About />
								</Route>
								<Route path='/packages'>
									<Packages />
								</Route>
								<Route path='/'>
									<Home />
								</Route>
							</Switch>
							<ul>
								<li>
									<Link to='/packages'></Link>
								</li>
								<li>
									<Link to='/faq'>FAQ</Link>
								</li>
								<li>
									<a href='https://www.honeybook.com/widget/w_bilbao_media_llc_170936/cf_id/5fda3e235ff8e50a0f01364c'>
										Get in Touch!
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</Router>
			</header>
		</React.Fragment>
	);
};

export default Header;
