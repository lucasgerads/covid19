import React from 'react'

import logo from '../assets/images/virus.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Covid19 Aachen</h1>
        <p>Covid19 Daten aus der Städteregion Aachen<br />
         gesammelt und aufbereitet von <a href="https://twitter.com/LucasGerads">Lucas Gerads</a>.</p>
    </header>
)

export default Header
