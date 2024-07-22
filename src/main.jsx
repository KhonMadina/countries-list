// Importing the React library
import React from 'react'

// Importing the ReactDOM library for rendering the React components to the DOM
import ReactDOM from 'react-dom/client'

// Importing the main App component
import App from './App.jsx'

// Importing the CSS file for global styles
import './index.css'

// Rendering the App component within the 'root' element in the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
    // Enabling StrictMode for highlighting potential problems in the application
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

