import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'antd/dist/reset.css'

// Create root only once
const root = ReactDOM.createRoot(document.getElementById('root'))

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
