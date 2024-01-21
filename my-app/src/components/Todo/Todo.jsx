import React from 'react'

function Todo({taskTitle, taskDescription, doneFlag}) {
  return (
    <div style={{color: doneFlag ? 'gray' : '', textDecoration: doneFlag ? 'line-through' : ''}}>
        <h1>{taskTitle}</h1>
        <p>{taskDescription}</p>
    </div>
  )
}

export default Todo