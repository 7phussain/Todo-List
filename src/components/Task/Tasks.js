import React from 'react'
import Task from './Task';
import styles from "./Tasks.module.css"
function Tasks() {
    return (
        <div className={styles.tasks}>
       <Task/>
        </div>
    )
}

export default Tasks