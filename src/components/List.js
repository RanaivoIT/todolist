import { useParams } from "react-router-dom"
import Item from "./Item"

const List = ({ tasks, onToggleCompleted }) => {

    const params = useParams()

    let filteredTasks = tasks

    if (params.filter) {
        let filter = params.filter.match()
        if (filter.input === 'completed') filteredTasks = tasks.filter(task => task.completed)
    }

    if (filteredTasks.length === 0) {
        return (
            <div className="card p-3">
                <h1 className="mb-3 h3">Liste des Tâches</h1>
                <ul className="list-group">
                    <li className="list-group-item d-flex align-items-center">
                        Aucune tâche à afficher
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <div className="card p-3">
            <h1 className="mb-3 h3">Liste des Tâches</h1>
            <ul className="list-group">
                {
                    filteredTasks.map((task) => (
                        <Item task={task} key={task.id} onToggleCompleted={onToggleCompleted}/>
                    ))
                }
            </ul>
        </div>
    )

}
export default List