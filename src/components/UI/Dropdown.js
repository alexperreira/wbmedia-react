import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dropdown.module.css';

const menuItems = [
	{
		title: 'Seniors',
		path: '/packages/seniors',
		className: 'dropdownLink',
	},
	{
		title: 'Weddings',
		path: '/packages/weddings',
		className: 'dropdownLink',
	},
	{
		title: 'Couples',
		path: '/packages/couples',
		className: 'dropdownLink',
	},
	{
		title: 'Families',
		path: '/packages/families',
		className: 'dropdownLink',
	},
];

const Dropdown = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<>
			<ul
				onClick={handleClick}
				className={
					click
						? `${styles.dropdownMenu} ${styles.clicked}`
						: styles.dropdownMenu
				}
			>
				{menuItems.map((item, index) => {
					return (
						<li key={index}>
							<Link
								className={styles.dropdownLink}
								to={item.path}
								onClick={() => setClick(false)}
							>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Dropdown;
