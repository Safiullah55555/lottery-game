import "./ticket.css"
import TicketNum from "./TicketNum"

export default function({ticket}){
    return(
        <div className="ticket">
            <p>Ticket</p>
            {ticket.map((num,idx) => (
            <TicketNum key={idx} num={num} />
        ))}

        </div>
    )
} 