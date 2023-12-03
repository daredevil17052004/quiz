import React from 'react'
import style from './Home.module.css'
const Home = () => {
  return (
    <div className={style.h2}>
        <h2>Quiz App</h2>
        <button type="button" className={style.b}>Play</button>
    </div>
  )
}

export default Home