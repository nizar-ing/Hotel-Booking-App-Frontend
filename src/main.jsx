import { StrictMode } from 'react'
import {BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client'

import {Toaster} from "react-hot-toast";
import 'react-day-picker/dist/style.css'
import App from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Toaster />
          <App/>
      </BrowserRouter>
  </StrictMode>,
)
