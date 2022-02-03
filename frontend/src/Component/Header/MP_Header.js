import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../Images/logo.png';
import './LP_Header.css';

function MP_Header() {
    return (
        <>
           <header>
                <div className='container container-flex'>
                    <div className='logoContainer'>
                        {/* <img src={logo} alt="logo" className='A-logo'/>   */}
                        <h2>LOGO</h2>
                    </div>
                    <nav>
                        <div className='list'>
                            <NavLink to="/" exact className="listItem" activeClassName='activeItem'>Home</NavLink>
                            <NavLink to="/about" className="listItem" activeClassName='activeItem'>About</NavLink>
                            <NavLink to="/feature" className="listItem" activeClassName='activeItem'>Feature</NavLink>
                            <NavLink to="/contact" className="listItem" activeClassName='activeItem'>Contact Us</NavLink>
                          
                        </div>
                    </nav>
                </div>
           </header> 
        </>
    )
}

export default MP_Header
