import React, { useState } from 'react';
import './Sidebar.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
function Sidebar() {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div className='mainContainer'>
        <div className='head-container'>
            <header className='head-text'><DehazeIcon className='icon' onClick={() => setSidebar(!sidebar)}/>menu</header>
        </div>
        {sidebar && <div className='sidebar active'>
            <ul>
                <a href='/profile'><li>Profile</li></a>
                <a href='/job'><li>Jobs</li></a>
                <a href='/jobseek'><li>Jobs Seekers</li></a>
                <a href='/settings'><li>Settings</li></a>
            </ul>
        </div>}
    </div>
    );
}

export default Sidebar;
