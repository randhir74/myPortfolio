import React from 'react'
import PropTypes from 'prop-types'
import '../App.css';
import { Link } from "react-router-dom";

export default function Header(props) {
    
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light header-button">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active" style={{paddingLeft:'20px'}}>
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item" style={{paddingLeft:'20px'}}>
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    {/* <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form> */}
                </div>
            </nav>
        </div>
    )
}
Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}