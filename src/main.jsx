import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DarkModeContextProvider from './context/DarkMode.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <DarkModeContextProvider>
    <App />
    </DarkModeContextProvider>
  </StrictMode>,
)
