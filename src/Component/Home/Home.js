import React from 'react';
import { NavLink } from 'react-router-dom';
import LP_Footer from '../Footer/LP_Footer';
import LP_Header from '../Header/LP_Header';
import './Home.css'

function Home() {
  return (
    <div className='Home'>
        <LP_Header />
           <div className='LP-mainSection'>
              <div className='left-box'>
                <h1>INTRODUCTION</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <div className='right-box'>
                <div className='wel-note'>
                    <h4>Welcome,</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <div className='btnbox'>
                    <div className='btn'>
                        <NavLink to='/signup' className="Signup">Join the community</NavLink>
                        <NavLink to='/signin' className="Signin">Already a Member</NavLink>
                    </div>
                </div>
              </div>
           </div>
         <LP_Footer/>
    </div>
  );
}

export default Home;