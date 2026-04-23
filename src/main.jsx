import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BGChanger from './BGChanger.jsx'


createRoot(document.getElementById('root')).render(
    <>
    <BGChanger/>
    <App/>
    </>
)
