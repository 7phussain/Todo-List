import React,{useContext} from 'react';
import TaskContext from '../Store';
import styles from "./Task.module.css"
function Task() {
  const {tasks,deleteTask,editTask} =   useContext(TaskContext);
  return (
    tasks.map((task,index) => {
        return <div key={task.id} className={styles.task}>
                <div className={styles.taskTitle}>{task.title}</div>
            <div className={styles.taskButtons}>
                <button className={styles.edit} onClick={()=>editTask(task.title,index)}>edit</button>
                <button onClick={()=>deleteTask(index)}>delete</button>
            </div>
        </div>
    })
  )
}

export default Task