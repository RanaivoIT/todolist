import React, {useState} from "react"
const Item = ({ task, onToggleCompleted }) => {

    const [completed, setCompleted] = useState(task.completed)

    const toggleCompleted = () => {
        setCompleted(!completed)
        onToggleCompleted(task.id)
    }

    return (
        <li className="list-group-item d-flex align-items-center">
            <span className="me-auto">
                {task.name}
            </span>
            <button className={"btn ms-auto " + (!completed ? 'btn-outline-success' : 'btn-success')} onClick={() => toggleCompleted()}>
                <i className="bi bi-check-lg"></i>
            </button>

        </li>
    )

}
export default Item