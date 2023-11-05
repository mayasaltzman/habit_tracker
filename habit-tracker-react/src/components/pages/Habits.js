import React from 'react'

const Habits = () => {
  return (
    <div>
      <h1>Habits</h1>
      <div id='habits-list'>
        <ul>
          <li>test</li>
        </ul>
      </div>
      <h2>Add Habit</h2>
      <form>
        <label>
          Habit:
          <input type="text" name="name" />
        </label>
        <label>
          Frequency:
          <select>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option selected value="bi-weekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Category:
          <select>
            <option value="dummy">Dummy</option>
            <option value="other">Other</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Habits
