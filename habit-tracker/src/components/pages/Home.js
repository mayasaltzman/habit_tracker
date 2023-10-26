import React, { useState, useEffect } from 'react'

const Home = () => {
    var [date, setDate] = useState(new Date()) //used to set current date and time

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000) //date is at an interval of 1000 ms

        return function cleanup() { //helps avoid memeory leaks
            clearInterval(timer)
        }

    })

    return (
        <div className='welcome'>
            {/* extracts date and time and returns as string */}
            <p>Time: {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>
        </div>
    )
}

export default Home
