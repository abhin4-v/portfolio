import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import File2 from './File2.jsx'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/file2" element={<File2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
