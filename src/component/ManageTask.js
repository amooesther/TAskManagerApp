import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
 

const ManageTask = ({Task, toggleComplete}) => {
  return (
    <div>
        <p onClick={()=>toggleComplete(Task.id)} className={`${Task.completed ? "completed" :''}`}>{Task.Task}</p>
        <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
        </div>
    </div>
  )
}

export default ManageTask
