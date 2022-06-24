import React, { Component } from 'react';
import MenuItems from './menuItems.js';
import './navBar.css';

class NavBar extends Component { 

    state = {
        clicked: false
    }

    handleClick = () => {

    };

    render() { 
        return (
            <nav className = 'NavBarItems'>
                <h1 className = "NavBar-Logo">HALLOC<i className="fab fa-react"></i></h1>
                {/*<div className = 'menu-icon'>

                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key = {index}>
                                <a className = {item.cname} href = {item.url}>{item.title}</a>
                            </li>
                        );
                    })}
                    <li><a href=""></a></li>
                </ul>*/}
            </nav>
        );
    }
}
 
export default NavBar;