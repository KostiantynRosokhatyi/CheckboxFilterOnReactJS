import React from 'react'
import '../style.css'
import  {Checkbox} from "antd";

import Filters from "./Filters";
function Ticket(props) {
    const {config, onChange} = props
    return (
        <div>
            {config.map((item) =>
                <li key={item.id}><Checkbox onClick={() => <Filters onClick={onChange(item.value)}/>}>
                    {item.text}
                </Checkbox></li> )}
        </div>
    )
}

export default Ticket