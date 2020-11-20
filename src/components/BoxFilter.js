import React from 'react'
import '../style.css'
import {Checkbox} from "antd";

function BoxFilter(props) {
    const {config, onChange, filters} = props
    return (
        <div>
            {config.map((item) =>

                <div key={item.id}><Checkbox onChange={() => onChange(item.value)}
                                             checked={filters.includes(item.value)}>{item.text}</Checkbox>
                </div>
            )}
        </div>
    )
}

export default BoxFilter