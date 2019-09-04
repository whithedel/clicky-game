import React from 'react'
import './style.css'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="row container-fluid">
                <ul className="navbar-nav align-items-center justify-content-center container-fluid">
                    <div className="col-sm-4 m-auto">
                        <li className="nav-item active">
                            <a className="navbar-brand" href="/">{props.title}</a>
                        </li>
                    </div>
                    <div className="col-sm-4 m-auto">
                        <li className="nav-item">
                            <p className={`guessSection mt-3 ${props.textAnimation}`}>{props.guess}</p>
                        </li>
                    </div>
                    <div className="col-sm-4 m-auto">
                        <li className="nav-item">
                            <p className="nav-item mt-3"><span className="mr-2">Scrore:{props.score}</span>|<span className="ml-2">Top Score:{props.topScore}</span></p>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
