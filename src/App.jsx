import './App.css'
import Lottery from '../Lottery'
import { sum } from '../helper'


function App() {

  let winningCond = (ticket) => {
    return sum(ticket)===15;
    
  }
  
  
  return (
    <>
    
     <Lottery n={3} winningCond={winningCond}/>
     
     
    
    </>
  )
}

export default App

//day 61 done.
//day 29 should be learn ...git $ git hub
