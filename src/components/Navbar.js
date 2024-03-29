import { Link } from "react-router-dom"

const Navbar = ({ onDeleteCompleted }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to={"/"} className="navbar-brand" >To Do List</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/"} >
                            <i className="bi bi-list"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/completed"}>
                            <i className="bi bi-list-check"></i>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={"/add"} >
                            <i className="bi bi-plus"></i>
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button className="btn btn-outline-danger" onClick={onDeleteCompleted}>
                            <i className="bi bi-trash"></i>
                        </button>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
)
export default Navbar