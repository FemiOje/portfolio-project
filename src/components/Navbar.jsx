import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="main-logo">
                <h2>
                    Femi
                </h2>
            </div>

            <div className="nav-links">
                <a href="" className="nav-link">About</a>
                <a href="" className="nav-link">What I Do</a>
                <a href="" className="nav-link">Work</a>
                <a href="" className="nav-link">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar