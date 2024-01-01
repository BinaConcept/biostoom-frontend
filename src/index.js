import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import App from './App';
import Header from './modules/header/header';
import Footer from './modules/footer';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<>
		<Header />
		<App />
		<Footer />
	</>
); 