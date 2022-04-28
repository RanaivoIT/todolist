import { useState } from "react"
import uniqueId from "uniqueid"
import data from "../data/data"
import MainRouter from "../routers/MainRouter"

const App = () => {

    let [tasks, setTasks] = useState(data)

    const onToggleCompleted = (taskId) => {
        let taskToUpdate = tasks.find(task => task.id === taskId)
        taskToUpdate.completed = !taskToUpdate.completed

        setTasks(tasks.map(task => {
            return task.id === taskId ? taskToUpdate : task
        }))

    }

    const onAddTask = (newTaskName) => {
        const newTask = {
            id: uniqueId(),
            name: newTaskName,
            completed: false
        }
        setTasks(tasks = [...tasks, newTask])
    }

    const onDeleteCompleted = () => {
        let newTasks = tasks.filter(task => !task.completed)
        setTasks(tasks = newTasks)
    }

    return (

        <div className="main">

            <MainRouter tasks={tasks} onToggleCompleted={onToggleCompleted} onAddTask={onAddTask} onDeleteCompleted={onDeleteCompleted} />

        </div>
    )
}
export default App