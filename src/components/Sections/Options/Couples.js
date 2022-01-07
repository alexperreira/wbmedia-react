import React, { Fragment } from 'react';
import styles from './Couples.module.css';
import classes from './AllPackages.module.css';

const Couples = () => {
	return (
		<Fragment>
			<div className={` ${classes.packagesHero} ${styles.couples}`} />
		</Fragment>
	);
};

export default Couples;
