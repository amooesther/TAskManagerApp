
import React,{useState} from 'react'
import styles from "./taskWrapper.css"

export const TaskMangerForm = ({addTask}) => {
const [value, setValue]=useState('');

const handleForm=(e)=>{
e.preventDefault();
addTask(value)

setValue('')

}



  return (
    <form className='taskForm' onSubmit={handleForm}>
<input type="text"  className='taskInput' 
value={value} placeholder='Add your task'onChange={(e)=>setValue(e.target.value)}/>
<button type='submit' className='taskBtn'>Add Task</button>
    </form>
  )
}
export default TaskMangerForm;
