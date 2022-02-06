import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ListMember() {
    const[ user, setUser ] = useState([])
    useEffect(() => {
        (function () {
            const loginRequest = new URL("https://bug-free.herokuapp.com/api/members/all");
            axios.get(loginRequest, {
              withCredentials: true
            })
            .then(res => {
                console.log(res);
            })
          })();
    }, [])
  return (
    <div className='main-container'>
        <div className='sub-container'>
           {/* <p>{user}</p> */}
        </div>
    </div>
  );
}

export default ListMember;
