import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './i18n'
import { PreferencesProvider } from './context/Preferences.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PreferencesProvider>
        <App />
      </PreferencesProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
