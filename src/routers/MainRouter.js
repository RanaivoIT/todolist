import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "../components/Add"
import List from "../components/List"

import Navbar from "../components/Navbar"



const MainRouter = ({ tasks, onToggleCompleted, onAddTask, onDeleteCompleted }) => (

    <BrowserRouter>
        <Navbar onDeleteCompleted={onDeleteCompleted} />
        <div className="container py-3">
            <Routes>
                <Route path="/" element={<List tasks={tasks} onToggleCompleted={onToggleCompleted} />} />
                <Route path="/:filter" element={<List tasks={tasks} onToggleCompleted={onToggleCompleted} />} />
                <Route path="/add" element={<Add onAddTask={onAddTask} />} />
            </Routes>
        </div>
        
    </BrowserRouter>
)
export default MainRouter