import React, { useEffect, useState } from 'react';

function ListMember() {
    const[ user, setUser ] = useState([])
    useEffect(() => {
        (async function () {
            const headersList = {
                'Accept': '*/*',
                'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
                'content-type': 'application/json; charset=utf-8'
            }
            // application/x-www-form-urlencoded
            const loginRequest = new URL("https://bug-free.herokuapp.com/api/members/all");
            await fetch(loginRequest, {
              method: "GET",
              headers: headersList
            }).then(response => {
                return response.json();
            }).then(data => {
                  console.log(data);
                  setUser(data)
              });
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
