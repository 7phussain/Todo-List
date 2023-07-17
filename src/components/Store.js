import React, { useState } from "react";

const TaskContext = React.createContext({
    tasks: [
        {
            title: "Buy banas",
            id: 0
        },
        {
            title: "Buy yogurt",
            id: 1
        }
    ],
    newTaskAppeder: function (newTask) { },  //this is just for showing the editor that these are functions 
    deleteTask: function (targetTaskId) { },   //Our work can be done without doing this here
    editTask: function (targetTaskTitle) { },
    updateTask:function(updateTask){}
}
)


export const TaskContextHandler = (props) => {
    const [editTargetTask, setEditTargetTask] = useState({title:"",index:0});
    const [tasks, setTasks] = useState([
        {
            title: "Buy banas",
            id: 0
        },
        {
            title: "Buy yogurt",
            id: 1
        }
    ])
    //herea we gettgin the newTask and we are appending it to the tasks(array)
    const newTaskAppederHandler = (newTask) => {
        setTasks((preTasks) => {
            return [...preTasks, { title: newTask, id: preTasks.length }]
        });
    }
    //here we are getting the id of the task which we want to delete from the array(tasks)
    const deleteTaskHandler = (targetTaskId) => {
        setTasks((preTasks) => {
            preTasks.splice(targetTaskId, 1);
            return [...preTasks]
        })
    }

    const editTaskHandler = (targetTaskTitle,index) => {
        setEditTargetTask({title:targetTaskTitle,index});

    }

    const updateTaskHandler = (updateTask) =>{
        setTasks((preTasks)=>{
             preTasks.map((task,index)=>{
                if(index===editTargetTask.index){
                   return  task.title=updateTask;
                }
                return;
            })
            return [...preTasks]
        })
        setEditTargetTask({title:"",index:""})
    }

    return <TaskContext.Provider value={{
        tasks: tasks,
        newTaskAppeder: newTaskAppederHandler,
        deleteTask: deleteTaskHandler,
        editTask: editTaskHandler,
        editTargetTask: editTargetTask,
        updateTask:updateTaskHandler
    }}>
        {props.children}
    </TaskContext.Provider>
}

export default TaskContext;