import React from 'react';
import MP_Header from '../Header/MP_Header';
import ListMember from '../ListMember/ListMember';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

function Dashboard() {
  return (
    <div>
        <MP_Header />
        <div className='D-mainContainer'>
          <div className='left-container'>
            <div className='search-container'>

            </div>
            <div className='list-member'>
              <ListMember />
            </div>
          </div>
            <Sidebar />
        </div>
    </div>
  );
}

export default Dashboard;
