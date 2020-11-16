import React, {useEffect, useState} from 'react'
import data from '../data.json'
import Ticket from "./Ticket";


function Filters(props) {
    const {value} = props
    const [state, setState] = useState(data);
    const uniqueTransfers = [...new Set(Object.keys(state.tickets).map(item => state.tickets[item].transfers))]

    function name(value) {
        let name2
        if (value === 1 || value === 0) {
            name2 = "Transfer"
        } else if (value === 2 || value === 3) {
            name2 = 'Transfers'
        }
        return name2
    }

    function filter(value) {
        return Object.keys(data.tickets)
            .filter(key => data.tickets[key].transfers === value)
            .map((key, index) => {
                return <div key={key} className='transfer_box'>
                    <span>{data.tickets[key].transfers}{name(2)}</span>
                    <Ticket/>
                </div>
            })
    }

    function checkValue(value) {
        if (value === 4) {
            return Object.keys(state.tickets).map(item => <div
                key={state.tickets[item].id}
                className="transfer_box">{state.tickets[item].transfers} {name(state.tickets[item].transfers)} <Ticket/>
            </div>)
        } else {
            return Object.keys(data.tickets)
                .filter(key => data.tickets[key].transfers === value)
                .map((key, index) => {
                    return <div key={key} className='transfer_box'>
                        <span>{data.tickets[key].transfers}{name(value)}</span>
                        <Ticket/>
                    </div>
                })
        }
    }

    return (
        <div>
            {console.log(uniqueTransfers)}
            {checkValue(value)}
        </div>
    )

}

export default Filters