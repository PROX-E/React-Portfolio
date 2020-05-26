import React from "react"

function Header () {
        return (
            <nav className="navbar navbar-expand-lg navbar-primary bg-dark navbar-fixed-top">
                <a className="navbar-brand" href="/">
                    <h2 className="text-white">Hunter Shriver</h2>
                </a>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" id="home">
                            <a className="nav-link" href="/"><button type="button" className="btn btn-danger text-white">Home</button></a>
                        </li>
                        <li className="nav-item" id="report">
                            <a className="nav-link" href="/portfolio"><button type="button" className="btn btn-success text-white">Saved Books</button></a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

export default Header;