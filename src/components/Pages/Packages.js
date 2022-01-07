import React from 'react';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// Import components
// import PackageItem from '../UI/PackageItem';
import Options from '../UI/Options';
import styles from './Packages.module.css';

// const types = ['Seniors', 'Couples', 'Weddings', 'Families'];

const Packages = () => {
	// const packagesList = PACKAGES_OPTIONS.map((option) => (
	// 	<PackageItem id={option.id} key={option.id} name={option.name} />
	// ));
	// const alignCenter = { display: 'flex', alignItems: 'center' };

	return (
		<div className={styles.packages}>
			<div className={styles.container}>
				<Options />
			</div>
		</div>
	);
};

export default Packages;
