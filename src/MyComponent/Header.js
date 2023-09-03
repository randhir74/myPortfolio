import React from 'react'
import PropTypes from 'prop-types'
import '../App.css';
import { Link } from "react-router-dom";

export default function Header(props) {
    
    return (
        <div>
            <nav className="custom-navbar-header navbar navbar-expand-lg navbar-light bg-custom" style={{ backgroundColor: '#1857d4' }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse custom-navbar" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active" style={{paddingLeft:'20px'}}>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item" style={{paddingLeft:'20px'}}>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
