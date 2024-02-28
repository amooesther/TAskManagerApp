

import { useState } from 'react'
import TaskMangerForm from './TaskManagerForm'
import ManageTask from './ManageTask';
import styles from './taskWrapper.css'
import {v4 as uuidv4} from 'uuid'
uuidv4();




const TaskWrapper = () => {
const [tasks, setTasks]=useState([])
const addTask=(task)=>{
setTasks([...tasks, {id:uuidv4(), Task:task, completed:false, isEditing:false } ])
console.log(tasks)
}

const toggleComplete =(id)=>{
    setTasks(tasks.map(task=>task.id ===id ?{...task, completed:
    !task.completed
    }:task))
}
  return (
    <div className='taskWrapper'> 
    <h1>Manage your Tasks</h1>
    <TaskMangerForm addTask={addTask}/>
    {tasks.map((task, index)=>(
<ManageTask Task={task} key={index} toggleComplete={toggleComplete}/>
    )        
    )}
 

    </div>
  )
}
export default TaskWrapper