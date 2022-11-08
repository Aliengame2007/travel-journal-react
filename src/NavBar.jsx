import React from 'react'
import logo from '../public/images/logo.png'

function NavBar() {
    return(
        <header>
            <img src={logo} />
            <p className="navbar--heading">my travel journal.</p>
        </header>
    )
}

export default NavBar