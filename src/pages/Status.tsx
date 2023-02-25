import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css';

export function Status(){ 
  const [newAnswer, setNewAnswers] = useState('')
  const [answers,setAnswers] = useState([
   'concordo...',
    'faz sentido!',
    'parabens'
])
    function createNewAnswers(event:FormEvent){
      event.preventDefault()
      
      setAnswers([newAnswer, ...answers])
      setNewAnswers('')
    
    }
    function handleHotkeySubmit(event:KeyboardEvent){
      if(event.key === 'Enter' && (event.ctrlKey)){
        setAnswers([newAnswer, ...answers])
        setNewAnswers('')

      }
    }
  return(
     <main className="status">
            <Header title="Tweet"/>  
           
            <Tweet  content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex corrupti sint eligendi natus quae, recusandae odit, rem voluptas eum consequatur sapiente consectetur excepturi ab tempore architecto, commodi unde doloremque fugiat?
"/>
              <Separator />

            <form onSubmit={createNewAnswers} className="answer-tweet-form">
              <label htmlFor="tweet">
                <img src="https://github.com/khnum782.png" alt="Gustavo Souza"/>
                <textarea
                 id="tweet"
                  placeholder="Tweet your answer"
                  value={newAnswer}
                  onKeyDown={handleHotkeySubmit}
                  onChange={(event) => {
                    setNewAnswers(event.target.value)
                  }}
                  />
              </label>
   
              <button type="submit">
                <PaperPlaneRight />
                <span>Answer</span>
                </button>
              </form>
    
    
                {answers.map(answer => {
                  return <Tweet key={answer} content={answer}/>
                })} 
          </main>
  )
}