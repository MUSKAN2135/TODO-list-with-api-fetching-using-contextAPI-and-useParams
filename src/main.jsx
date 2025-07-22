import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import {Provider} from 'react-redux'
import Store from './components/redux/store'


createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <StrictMode>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
)
