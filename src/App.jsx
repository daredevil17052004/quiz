import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Quiz from './components/Quiz.jsx'
import QuestionData from './components/QuestionsData.jsx'
import { Routes,Route } from 'react-router-dom'
import Result from './components/Result.jsx'
import { ScoreContext } from './components/Quiz.jsx'

function App() {

  return (
    <>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Questions' element={<Quiz  questions={QuestionData}/>}></Route>
          <Route path='/Result' element={<Result/>}></Route>
        </Routes>
       
    </>
  )
}

export default App
