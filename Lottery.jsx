import { useState } from "react"
import {genTickets,sum} from "./helper"
import Ticket from "./src/Ticket";


export default function Lottery({n=3,winningCond}){
  let[ticket,setTicket]=useState(genTickets(n));
  let isWinning=winningCond(ticket)

  let newTicket =()=>{
    setTicket(genTickets(n))
  }

  let styles={
    marginRight: "50px"
  }

    return(
        <div>
            <h1>LOTTERY GAME</h1>
            <Ticket ticket={ticket}/>
            <button onClick={newTicket} style={styles}>Buy Ticket</button>
            <h3 style={styles} >{isWinning && "congtatulation,You Won"}</h3>

        </div>
    )
}