import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import 'aos/dist/aos.css'; // Import AOS CSS
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>
  </StrictMode>
)
