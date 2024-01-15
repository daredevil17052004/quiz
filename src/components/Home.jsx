import React from 'react'
import style from './Home.module.css'
import QuestionData from './QuestionsData'
import Quiz from './Quiz'
import { Link } from 'react-router-dom'

const Home = () => {

  const handlePlay = () =>{
    return(
      <>
        <Quiz/>
      </>
    )
  }


  return (
    <div className={style.h2}>
        <h2>Quiz App</h2>
        <Link to='/Questions'>
        <button type="button" className={style.b} onClick={handlePlay}>Play</button>
        </Link>
    </div>
  )
}

export default Home
