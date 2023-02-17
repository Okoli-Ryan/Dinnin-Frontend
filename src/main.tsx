import './index.css';

import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { customTheme } from './core/Theme';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ConfigProvider theme={customTheme}>
			<App />
		</ConfigProvider>
	</React.StrictMode>
);
