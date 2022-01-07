import React, { useState } from 'react';
import styles from './Options.module.css';
// import { Parallax } from '@react-spring/parallax';

// import components
import Seniors from '../Sections/Options/Seniors';
import Families from '../Sections/Options/Families';
import Weddings from '../Sections/Options/Weddings';
import Couples from '../Sections/Options/Couples';

function Options(props) {
	const [activeOption, setActiveOption] = useState('seniors');

	const handleSeniors = () => {
		setActiveOption('seniors');
	};

	const handleFamilies = () => {
		setActiveOption('families');
	};

	const handleWeddings = () => {
		setActiveOption('weddings');
	};

	const handleCouples = () => {
		setActiveOption('couples');
	};

	const renderElement = (props) => {
		if (activeOption === 'seniors') {
			return <Seniors />;
		} else if (activeOption === 'families') {
			return <Families />;
		} else if (activeOption === 'weddings') {
			return <Weddings />;
		} else if (activeOption === 'couples') {
			return <Couples />;
		}
	};

	const scrollEvent = () => {
		window.scrollTo({
			top: document.documentElement.clientHeight,
			left: 0,
			behavior: 'smooth',
		});
	};

	// Create function that when hovering over package option, the backdrop changes images and darkens other options

	return (
		<div className={styles.options}>
			<ul className={styles.optionsGroup}>
				<li
					className={activeOption === 'seniors' ? 'active' : ''}
					onMouseEnter={handleSeniors}
					onClick={scrollEvent}
				>
					Seniors
				</li>
				<li
					className={activeOption === 'families' ? 'active' : ''}
					onMouseEnter={handleFamilies}
					onClick={scrollEvent}
				>
					Families
				</li>
				<li
					className={activeOption === 'weddings' ? 'active' : ''}
					onMouseEnter={handleWeddings}
					onClick={scrollEvent}
				>
					Weddings
				</li>
				<li
					className={activeOption === 'couples' ? 'active' : ''}
					onMouseEnter={handleCouples}
					onClick={scrollEvent}
				>
					Couples
				</li>
			</ul>
			<div className={styles.outlet}>{renderElement()}</div>
		</div>
	);
}

export default Options;
