import React from 'react';
import styles from './Hello.module.css';

const Hello = (props) => {
	const reveal = () => {
		const reveals = document.querySelectorAll('.reveal');
		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 150;
		}
		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add('active');
		} else {
			reveals[i].classList.remove('active');
		}
	};
	return (
		<div className={`${styles.helloDiv} ${styles.active}`}>
			<h2>{props.text}</h2>
		</div>
	);
};

export default Hello;
