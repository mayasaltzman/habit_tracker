// need to fix MINUTES ONLY UPDATING ON REFRESH

import React, { useState, useEffect } from 'react'

const Home = () => {
    const [date, setDate] = useState(new Date()) //used to set current date and time

    useEffect(() => {
        const timer = setInterval(() => { setDate(new Date()) }, 60000) //date is at an interval of 60 000 ms so clock updates each minute

        return () => clearInterval(timer)
        // return function cleanup() { //helps avoid memeory leaks
        //     clearInterval(timer)
        // }

    })

    // getting date and time values
    const hours = date.getHours()
    const minutes = date.getMinutes()

    return (
        <div className='welcome'>
            {/* extracts time and returns as string */}
            <p>{String(hours - 12).padStart(2, '0')}:{String(minutes).padStart(2, '0')}</p>
            {/* extracts datw and returns as string */}
            <p>{date.toLocaleDateString()}</p>
        </div>
    )
}

export default Home
