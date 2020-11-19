import React, { useState} from 'react'
import {Row, Col} from 'antd'
import Title from "antd/es/typography/Title";
import 'antd/dist/antd.css';
import '../style.css'
import data from '../data.json'
import Filters from "./Filters";
import config from "../config.json"
import Ticket from "./Ticket";
import FlySVG from "./FlySVG";

function App() {
    const array =[]
  /*  const uniqueTransfers = [...new Set(Object.keys(data.tickets).map(item => data.tickets[item].transfers))]*/
    const [FilterTickets, setFilterTickets] = useState([Object.keys(data.tickets).map(item =>
        <div key={data.tickets[item].id} className="transfer_box">{data.tickets[item].transfers} <FlySVG /></div>)])
    const [Filter, setFilter] = useState([])

    return (
        <div>
            <Row>
                <Col span={24} className='title'>
                    <Title level={5}>NUMBER OF TRANSFERS</Title>
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={8} className='checkBox'>
                    <Ticket config={config} onChange={onChange}/>
                </Col>
                <Col span={4} className='checkBox_span-padding'>
                    <span className='checkBox_span'>ONLY</span> <br/>
                    <span className='checkBox_span'>ONLY</span> <br/>
                    <span className='checkBox_span'>ONLY</span> <br/>
                    <span className='checkBox_span'>ONLY</span>
                </Col>
                <Col span={12} align='start'>
                    {FilterTickets}
                </Col>
            </Row>
        </div>
    )
    function onChange(value) {
        setFilter(DeleteOrAdd (value, Filter))

        array.push(<Filters Filter={Filter} value={Filter}/>)
        setFilterTickets(array)
    }
    function DeleteOrAdd (value, array){
        const someData = array
        if(!(someData.includes(value))){
            someData.push(value)
        }else{
            someData.splice(someData.indexOf(value, 0), 1)
        }
        return someData
    }
}

export default App