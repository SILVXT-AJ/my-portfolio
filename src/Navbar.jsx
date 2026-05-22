

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <a href="#" className="navbar-name">
                        Silvest AJ
                    </a>
                </div>
                <div className="navbar-right">
                    <ul className="navbar-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;