import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Home.css';

const Home = () => {
    const [date, setDate] = useState(new Date()) //used to set date for calender

    // useEffect(() => {
    //     const timer = setInterval(() => { setDate(new Date()) }, 60000) //date is at an interval of 60 000 ms so clock updates each minute

    //     // return () => clearInterval(timer)
    //     return function cleanup() { //helps avoid memeory leaks
    //         clearInterval(timer)
    //     }

    // })

    // getting date and time values
    // const hours = date.getHours()
    // const minutes = date.getMinutes()

    //moment library just does this for me lol
    const curr = moment().format('MMMM D, YYYY')
    const time = moment().format('h:mm a')

    return (
        <div className='landing'>
            {/* extracts time and returns as string */}
            {/* <p>{String(hours - 12).padStart(2, '0')}:{String(minutes).padStart(2, '0')}</p> */}
            {/* extracts datw and returns as string */}
            {/* <p>{date.toLocaleDateString()}</p> */}
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
