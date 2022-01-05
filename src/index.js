import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './App';
// import Home from './components/Pages/Home';
// import Packages from './components/Pages/Packages';
// import FAQ from './components/Pages/FAQ';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			{/* <Routes>
			<Route path='/' element={<App />}>
			<Route index element={<Home />} />
			<Route path={Packages} element={<Packages />} />
			<Route path='faq' element={<FAQ />} />
			</Route>
		</Routes> */}
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
