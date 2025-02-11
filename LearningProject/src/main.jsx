import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    // To use React Router Dom:
    // 1st step: Wrapp <App/> with <BrowserRouter> </BrowserRouter>
    <BrowserRouter >
        <App />
    </BrowserRouter>    
    
)
