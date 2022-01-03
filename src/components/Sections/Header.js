import React from 'react';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
=======
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Header.module.css';
>>>>>>> 124f51ff674b0d10a389a8359664593a8d69f233
import logo from '../../assets/WB-Submark-CMYK.png';

const Header = () => {
	return (
		<React.Fragment>
			<header>
<<<<<<< HEAD
				<div className='container'>
					<img src={logo} alt='' className='logo' />
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
=======
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
>>>>>>> 124f51ff674b0d10a389a8359664593a8d69f233
			</header>
		</React.Fragment>
	);
};

export default Header;
