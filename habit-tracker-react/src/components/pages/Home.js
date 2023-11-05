import React, { useState} from 'react'
import moment from 'moment'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Home.css';

const Home = () => {
    const [date, setDate] = useState(new Date()) //used to set date for calender

    //moment library just does this for me lol
    const curr = moment().format('MMMM D, YYYY')
    const time = moment().format('h:mm a')

    return (
        <div className='landing'>
            <h1>{curr}</h1>
            <h2>{time}</h2>

            {/* calendar section */}
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>

        </div>
    )
}

export default Home
