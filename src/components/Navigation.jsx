import { Link } from "wouter"

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <Link to="/">
                    <a className="navbar-brand">Celmira Blog</a>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link to="/">
                                <a className="nav-link active">Inicio</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/acerca-de">
                                <a className="nav-link">Acerca de</a>
                            </Link>
                        </li>





                    </ul>

                    {/* 
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Linkedin</li>
                    </ul>
                    */}

                </div>
            </div>
        </nav>

    )
}



export default Navigation