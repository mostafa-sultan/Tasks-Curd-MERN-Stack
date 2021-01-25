import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">TODO Tasks</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Tasks</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Task</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create Catigory</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;