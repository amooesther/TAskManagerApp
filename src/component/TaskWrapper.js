

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
  return (
    <div 
    className='taskWrapper'> 
    <TaskMangerForm addTask={addTask}/>
    {tasks.map((task, index)=>(
<ManageTask Task={task} key={index}/>
    )        
    )}
 

    </div>
  )
}
export default TaskWrapper