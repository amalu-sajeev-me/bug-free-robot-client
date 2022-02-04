import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../Images/logo.png';
import './MP_Header.css';

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
                            <NavLink to="/dashboard" exact className="listItem" activeClassName='activeItem'>Dashboard</NavLink>
                            <NavLink to="/notification" className="listItem" activeClassName='activeItem'>Notifications</NavLink>
                            <NavLink to="/messages" className="listItem" activeClassName='activeItem'>Messages</NavLink>
                            <NavLink to="/help" className="listItem" activeClassName='activeItem'>Help</NavLink>
                          
                        </div>
                    </nav>
                </div>
           </header> 
        </>
    )
}

export default MP_Header
