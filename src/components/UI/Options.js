import React, { useState } from 'react';
import styles from './Options.module.css';
// import { Parallax } from '@react-spring/parallax';

// import components
import Seniors from '../Sections/Options/Seniors';
import Families from '../Sections/Options/Families';
import Weddings from '../Sections/Options/Weddings';
import Couples from '../Sections/Options/Couples';

// const types = ['Seniors', 'Families', 'Weddings', 'Couples'];

// const alignCenter = { display: 'flex', alignItems: 'center' };

function Options() {
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

	const renderElement = () => {
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

	return (
		<div className={styles.options}>
			<ul className={styles.optionsGroup}>
				<li
					className={activeOption === 'seniors' ? 'active' : ''}
					onClick={handleSeniors}
				>
					Seniors
				</li>
				<li
					className={activeOption === 'families' ? 'active' : ''}
					onClick={handleFamilies}
				>
					Families
				</li>
				<li
					className={activeOption === 'weddings' ? 'active' : ''}
					onClick={handleWeddings}
				>
					Weddings
				</li>
				<li
					className={activeOption === 'couples' ? 'active' : ''}
					onClick={handleCouples}
				>
					Couples
				</li>
			</ul>
			<div className={styles.outlet}>{renderElement()}</div>
		</div>
	);
}

export default Options;
