import React from 'react'
import './Habits.css';

const Habits = () => {
  return (
    <div>
      <h1>Habits</h1>
      <div id='habits-list'>
        <ul>
          <li>test</li>
        </ul>
      </div>
      <div id='add-habit'>
        <h2>Add Habit</h2>
        <div id='form-wrapper'>
          <form id='habit-form'>
            <label className='test'>
              Habit:
              <input type="text" name="name" />
            </label>
            <label className='form-content'>
              Frequency:
              <select>
                <option selected value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className='form-content'>
              Category:
              <select>
                <option value="dummy">Dummy</option>
                <option value="other">Other</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>

  )
}

export default Habits
