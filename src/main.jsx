import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import 'react-day-picker/dist/style.css'
import App from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
