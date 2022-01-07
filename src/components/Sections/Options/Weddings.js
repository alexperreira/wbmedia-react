import React, { Fragment } from 'react';
import styles from './Weddings.module.css';
import classes from './AllPackages.module.css';

const Weddings = () => {
	return (
		<Fragment>
			<div className={`${styles.weddings} ${classes.packagesHero}`}></div>
		</Fragment>
	);
};

export default Weddings;
