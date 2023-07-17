import React from 'react';
import styles from "./App.module.css"
import Tasks from './components/Task/Tasks';
import Input from './components/Input/Input';

function App() {
    
    return (<>
            <h1>TODO LIST</h1>
            <div className={styles.todolist}>
               <Input/>
               <Tasks/>
            </div>
            </>
    )
}

export default App