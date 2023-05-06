import React, { useState } from 'react'

const TodoForm = () => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task && dueDate) {
      setTasks([...tasks, { task, dueDate }]);
      setTask('');
      setDueDate('');
    }
  }

  return (
    <div className='container'>
      <h2>To-Do Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input 
          type="text" 
          id="task" 
          name="task" 
          value={task}
          onChange={(event) => setTask(event.target.value)} 
        /><br /><br />

        <label htmlFor="dueDate">Due Date:</label>
        <input 
          type="date" 
          id="dueDate" 
          name="dueDate"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)} 
        /><br /><br />

        <button type="submit">Add Task</button>
      </form>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.task} - {task.dueDate}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoForm
