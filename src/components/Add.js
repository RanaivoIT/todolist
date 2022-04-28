import { useNavigate } from "react-router-dom"

const Add = ({ onAddTask }) => {

    let newtask = ''
    const history = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault()
        onAddTask(newtask.value)
        history('/')
    }

    return (
        <div className="card p-3">
            <h1 className="h3">Nouvelle Tâche</h1>
            <form className="py-3" onSubmit={e => handelSubmit(e)}>
                <label htmlFor="task">Nom de la Tâche</label>
                <input type="text" className="form-control" id="task" placeholder="Tapez ici..." required
                    ref={input => newtask = input}
                />

                <button type="submit" className="btn btn-primary mt-2">Ajouter</button>
            </form>
        </div>
    )
}
export default Add