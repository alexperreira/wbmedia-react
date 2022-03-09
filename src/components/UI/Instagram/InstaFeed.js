import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const InstaFeed = () => {
	return (
		<InstagramEmbed
			url='https://www.instagram.com/bilbaowhitneyphoto/'
			clientAccessToken='659866231822446|IGQVJYUHMyS1M5Tk5kejVVSmhrV3NlQXJBVFloVzBiVDVoaDhnUUdFSnhvZAUVsdmZAZAQkhFRFpxTEwtVnI0Y0RzSUoycE8xNVBxSVl1ZAWg4NkgxV3VfVDJqTTN0WWt3RFVtSlZAaTGdfak1PXzRrRTVHeQZDZD'
			maxWidth={640}
			hideCaption={false}
			containerTagName='div'
		/>
	);
};

export default InstaFeed;
