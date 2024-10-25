import React from 'react'
import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const rootElement = document.querySelector('#root')
const reactRoot = createRoot(rootElement)

reactRoot.render(
	<StrictMode>
		<App />
	</StrictMode>,
)