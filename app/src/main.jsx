import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoredContextProvider from './context/StoredContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoredContextProvider>
      <App />
    </StoredContextProvider>
  </BrowserRouter>
)
