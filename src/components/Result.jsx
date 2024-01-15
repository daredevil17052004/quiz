import React from 'react'
import styles from './Result.module.css'
import { useContext } from 'react'
import {ScoreContext} from './Quiz'
import { Link } from 'react-router-dom'

const Result = () => {

  const score = useContext(ScoreContext)
  console.log(score);

  return (
    <div className={styles.main}>
      <div className={styles.la}>
        <h2>Result</h2>
      </div>
      <div className={styles.item}>
        <p className={styles.prac}>You need more practice!</p>
        <p className={styles.pl}>Your score is {score}</p>
        <div className={styles.th}>
          <div className={styles.tha}>
            <div className={styles.po}>Total Number of Question</div>
            <div className='a'>15</div>
          </div>
          <div className={styles.tha}>
            <div className={styles.po}>Number of questions attempted</div>
            <div className='a'>9</div>
          </div>
          <div className={styles.tha}>
            <div className={styles.po}>Number of correct answers</div>
            <div className='a'>9</div>
          </div>
          <div className={styles.tha}>
            <div className={styles.po}>Number of wrong answers</div>
            <div className='a'>6</div>
          </div>
        </div>

        <div className={styles.buttt}>
          <div>
            <Link to='/'>
            <button className={styles.ks}>Play Again</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='item'></div>

    </div>
  )
}

export default Result