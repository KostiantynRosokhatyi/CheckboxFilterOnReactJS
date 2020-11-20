import React, {useState} from 'react'
import {Row, Col} from 'antd'
import Title from "antd/es/typography/Title";
import 'antd/dist/antd.css';
import '../style.css'
import data from '../data.json'
import config from "../config.json"
import BoxFilter from "./BoxFilter";
import FlySVG from "./FlySVG";

function App() {
    const [tickets] = useState(data.tickets)
    const [filters, setFilters] = useState([1, 2, 3, 0, 4])
    const [filterTickets, setFilterTickets] = useState(data.tickets)

    const onChange = (value) => {
        console.log(value)
        if (value === 4) {
            if (filters.includes(value)) {
                console.log(filters.includes(value))
                setFilters([])
            } else {
                console.log(!filters.includes(value))
                setFilters([1, 2, 3, 0, 4])
                setFilterTickets(tickets)
            }
        } else {
            const newFilter = NewFilters(value)
            const newTickets = tickets.filter(item => newFilter.includes(item.transfers))
            setFilterTickets(newTickets)
            setFilters(newFilter)
        }
    }

    const NewFilters = (value) => {

        if (!(filters.includes(value))) {
            return [...filters, value]
        } else {
            return filters.filter(item => item !== value)
        }
    }
    const ApplyOnlyFilter = (value) => {
        setFilters(value)
        const filteredTickets = tickets.filter(item => item.transfers === value)
        setFilterTickets(filteredTickets)
    }
    const SetNameOfTransfers = (value) => {
        if (value === 1) {
            return 'Transfer'
        } else {
            return 'Transfers'
        }
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
                    <BoxFilter ApplyOnlyFilter={ApplyOnlyFilter} config={config} onChange={onChange} filters={filters}/>
                </Col>
                <Col span={4} className='checkBox_span-padding'>
                    <span className='checkBox_span'>ONLY</span> <br/>
                    <span className='checkBox_span'>ONLY</span> <br/>
                    <span className='checkBox_span'>ONLY</span> <br/>
                    <span className='checkBox_span'>ONLY</span> <br/>
                </Col>
                <Col span={12} align='start'>
                    {filterTickets.map(item => {
                        return <div key={item.id}>
                            <div className="transfer_box">
                                <span>{item.transfers} {SetNameOfTransfers(item.transfers)}</span> <br/> <FlySVG/></div>
                        </div>
                    })}
                </Col>
            </Row>
        </div>
    )
}

export default App