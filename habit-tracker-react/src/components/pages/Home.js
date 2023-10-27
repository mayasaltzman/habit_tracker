import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Calendar from 'react-calendar'

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
    const curr = moment().format('MMMM Do YYYY')
    const time = moment().format('h:mm a')

    return (
        <div className='welcome'>
            {/* extracts time and returns as string */}
            {/* <p>{String(hours - 12).padStart(2, '0')}:{String(minutes).padStart(2, '0')}</p> */}
            {/* extracts datw and returns as string */}
            {/* <p>{date.toLocaleDateString()}</p> */}
            <h1>Welcome</h1>
            <p>{curr}</p>
            <p>{time}</p>

            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
        </div>
    )
}

export default Home
