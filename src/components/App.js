import React, {useEffect, useState} from 'react'
import {Row, Col, Typography, Checkbox} from 'antd'
import Title from "antd/es/typography/Title";
import 'antd/dist/antd.css';
import '../style.css'
import Filters from "./Filters";


function App() {
    /*const [stateTicket, setTicket] = useState(Ticket)*/
    const [state, setState] = useState(<Filters value={4}/>)
    const d = state

    function onChange(value) {

        setState(<Filters value={value}/>)
    }

    return (
        <div>
            <Row>
                <Col span={24} className='title'>
                    <Title level={5}>NUMBER OF TRANSFERS</Title>
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={8} className='checkBox'>
                    <Checkbox onChange={() => onChange(4)}>All </Checkbox> <br/>
                    <Checkbox onChange={() => onChange(0)}>NO TRANSFERS </Checkbox> <br/>
                    <Checkbox onChange={() => onChange(1)}>1 TRANSFER </Checkbox> <br/>
                    <Checkbox onChange={() => onChange(2)}>2 TRANSFER </Checkbox> <br/>
                    <Checkbox onChange={() => onChange(3)}>3 TRANSFER </Checkbox>
                </Col>
                <Col span={4} className='checkBox_span-padding'>
                    <span className='checkBox_span'>ONLY</span> <br/>
                    <span className='checkBox_span'>ONLY</span> <br/>
                    <span className='checkBox_span'>ONLY</span> <br/>
                    <span className='checkBox_span'>ONLY</span>
                </Col>
                <Col span={12} align='start'>
                    {state}
                </Col>
            </Row>
        </div>
    )
}

export default App