import React, { createContext } from 'react'
import styles from "./Quiz.module.css"
import { useState } from 'react';
import Result from './Result'
import style from './Home.module.css'
import { Link } from 'react-router-dom';

const ScoreContext = createContext()

const Quiz = (props) => {
    const ques = props.questions();
    let [score, setScore] = useState(0)
    let [curQues, setCurQues] = useState(-1)
    console.log(ques)

    const handlePlay = () =>{
        setCurQues(0)
    }


    if(curQues === -1){
        return (
            <>
           <div className={style.h2}>
                <h2>Quiz App</h2>
                <button type="button" className={style.b} onClick={handlePlay}>Play</button>
            </div>
            </>
          )
    }

    if(curQues >= ques.length){
        return(
            <ScoreContext.Provider value={score}>
                <Result score={score}/>
            </ScoreContext.Provider>
        )
    }

    const handlePrevious = () =>{
        let r = curQues -1 
        setCurQues(r)
        console.log(curQues)
    }

    const handleNext= () =>{
        let r = curQues +1
        setCurQues(r)
    }

    const handleQuit = () =>{
        window.confirm('are you sure you want quit?')
    }

    function handleAnswer(selectedOption) {
        if (selectedOption === ques[curQues].answer) {
            setScore((prevScore) => prevScore + 1);
        }
        const nextQuestion = curQues + 1;
        setCurQues(nextQuestion);
    }


  return (
    <>
        <div className={styles.main}>
            <div className={styles.it}> 
                Question  
            </div>
        <div>
            <div className={styles.p}>
                {curQues+1} of 15
            </div>
            <div className={styles.ques}>
                {ques[curQues].question}
            </div>
        </div>

                <div>
                    <div className={styles.item}>
                        <div className={styles.answer}>
                            <div className='ans'>
                                <button className={styles.lp} onClick={()=>handleAnswer(ques[curQues].optionA)}>{ques[curQues].optionA}</button>
                            </div>
                            <div className='ans'>
                                <button className={styles.lp} onClick={()=>handleAnswer(ques[curQues].optionB)}>{ques[curQues].optionB}</button>
                            </div>
                            <div className='ans'>
                                <button className={styles.lp} onClick={()=>handleAnswer(ques[curQues].optionC)}>{ques[curQues].optionC}</button>
                            </div>
                            <div className='ans'>
                                <button className={styles.lp} onClick={()=>handleAnswer(ques[curQues].optionD)}>{ques[curQues].optionD}</button>
                            </div>
                        </div>
                    </div> 
                    <div className={styles.buttons}>
                        <div className={styles.butt}>
                            <div>
                                <button className={styles.bt} onClick={handlePrevious}>Previous</button>
                            </div>
                            <div>
                                <button className={styles.bt} onClick={handleNext}>Next</button>
                            </div>
                            <div>
                                <button className={styles.bt} onClick={handleQuit}>Quit</button>
                            </div>
                            <div>
                                <Link to='/Result'>
                                <button className={styles.bt}>Finish</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    <ScoreContext.Provider value={score}>
            <Result score={score}/>
    </ScoreContext.Provider>

    </>
  )
  }

  export { Quiz as default, ScoreContext };