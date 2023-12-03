import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Quiz from './components/Quiz.jsx'
import Resukt from './components/Result.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Home/>
    {/* <Quiz/> */}
    {/* <Resukt/> */}
  </React.StrictMode>,
)
