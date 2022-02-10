import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
	return (
		<button className={styles.inquireButton} >
			<a
				target='_blank'
				rel='noreferrer'
				href='https://www.honeybook.com/widget/w_bilbao_media_llc_170936/cf_id/5fda3e235ff8e50a0f01364c'
			>
				{props.text}
			</a>
		</button>
	);
};

export default Button;
