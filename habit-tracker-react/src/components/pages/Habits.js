import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Habits.css';

const Habits = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/data')
      .then((response) => {
        setData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // prevents page from refreshing
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Habits</h1>
      {/* list of habits */}
      <div id='habits-list'>
        <ul>
          <li>test</li>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {/* Assuming 'id' is a unique identifier in your data */}
                {item.habit}
              </li>
            ))}
          </ul>
        </ul>
      </div>
      <div id='add-habit'>
        <h2>Add Habit</h2>
        {/* section of form input to add habits starts here*/}
        <div id='form-wrapper'>
          <form id='habit-form' onSubmit={handleSubmit}>
            <label className='test'>
              Habit:
              <input type="text" name="name" required />
            </label>
            <label className='form-content'>
              Frequency:
              <select required>
                <option selected value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </label>
            <label className='form-content'>
              Category:
              <select required>
                <option value="dummy">Dummy</option>
                <option value="other">Other</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        {/* form input ends here */}
      </div>
    </div>

  )
}

export default Habits
