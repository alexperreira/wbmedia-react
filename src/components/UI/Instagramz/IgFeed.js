import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const IgFeed = () => {
	return (
		<div>
			<InstagramEmbed
				url='https://i.instagram.com/api/v1/feed/timeline/'
				clientAccessToken='936619743392459|3cdb3f896252a1db29679cb4554db266'
			/>
		</div>
	);
};

export default IgFeed;
