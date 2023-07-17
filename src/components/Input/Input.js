import React, { useState, useContext,useEffect} from 'react'
import styles from "./Input.module.css";
import TaskContext from '../Store';
function Input() {
    const {newTaskAppeder,editTargetTask,updateTask} = useContext(TaskContext);
    const [task, setTask] = useState("");


    

    const taskChangeHandler = event => {
        setTask(event.target.value);
    }

useEffect(() => {
  setTask(editTargetTask.title);
  

}, [editTargetTask])


    /*here we are sending new task to the store component to append it to the array (tasks) through a function 
    called newtaskAppeder and also clearing the input field*/
    const newTask = () => {
        if(task===""){
            return;
        }
        newTaskAppeder(task);
        setTask("");
    }


    return (
        <div className={styles.inputs}>
            <input type="text" value={task} onChange={taskChangeHandler} />
            {!editTargetTask.title?<button onClick={newTask}>ADD</button>:<button onClick={()=>updateTask(task)}>Update</button>}
        </div>
    )
}

export default Input