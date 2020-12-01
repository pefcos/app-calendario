import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <a className="navbar-brand" href="localhost:3000">eAgenda</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="-app-spacer"></span>
                <div className="collapse navbar-collapse float-right" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Calendário</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/sobre">Sobre</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;