import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.jsx'
import Quiz from './components/Quiz.jsx'
import Resukt from './components/Result.jsx'
import QuestionData from './components/QuestionsData.jsx'


function App() {

  return (
    <>
        {/* <Home/> */}
        <Quiz questions = {QuestionData}/>
        {/* <Resukt/> */}
    </>
  )
}

export default App
