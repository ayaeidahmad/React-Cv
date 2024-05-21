import "../style/Style.css"

const NavBar = () => {
    return (
        <nav className="nav">
            <p className="logo">AYA EID AHMAD</p>
            <ul className="list">
                <li className="list-item"><a href="#l-portfolio">PORTFOLIO</a></li>
                <li className="list-item"><a href="#l-about">ABOUT</a></li>
                <li className="list-item"><a href="#l-contact">CONTACT</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
