import React from 'react'
import styles from "./Quiz.module.css"

const Quiz = () => {
  return (
    <div className={styles.main}>
        <div className={styles.it}>
            Question
        </div>
        <div className={styles.p}>
            1 of 15
        </div>
        <div className={styles.ques}>
            Which is the only mammal that can jump?
        </div>
        <div className={styles.item}>
            <div className={styles.answer}>
                <div className='ans'>
                    <button className={styles.lp}>Dog</button>
                </div>
                <div className='ans'>
                    <button className={styles.lp}>Elephant</button>
                </div>
                <div className='ans'>
                    <button className={styles.lp}>Goat</button>
                </div>
                <div className='ans'>
                    <button className={styles.lp}>Lion</button>
                </div>
            </div>
        </div> 
        <div className={styles.buttons}>
            <div className={styles.butt}>
                <div>
                    <button className={styles.bt}>Previous</button>
                </div>
                <div>
                    <button className={styles.bt}>Next</button>
                </div>
                <div>
                    <button className={styles.bt}>Quit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quiz