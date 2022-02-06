import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../Login.css";
import LP_Header from "../../Header/LP_Header";
import { SubmitButton, Input, Form as form, Label } from "../Common";
function Signin() {
  const history = useHistory();

  const handleBtnCancel = (e) => {
    e.preventDefault();
    history.push('/')
  }
  const handlebtnChange = (e) => {
    history.push('/signup');
  }
  const [loggedinStatus, setLoggedinStatus] = useState(false);
  useEffect(() => {
    console.log('status:',loggedinStatus);
  })
  
  function handleBtnClick(e) {
    e.preventDefault();
    (function () {
      const form = document.forms[0];
      const username = form.elements.namedItem('username').value;
      const password = form.elements.namedItem('password').value;
      console.log(username, password);
      const loginRequest = new URL("https://bug-free.herokuapp.com/api/members/login");
      axios.post(loginRequest,{
        username: `${username}`,
        password: `${password}`
      },{
        withCredentials: true
      })
      .then(res => {
          console.log("loggedin status", loggedinStatus);
          console.log("response result:", res.data);
          if (res.data.status === true) {
            console.log("logging in .. . ");
            setLoggedinStatus(true)
            console.log('status:',loggedinStatus);
          }
      });
    })();
  }
  if(loggedinStatus === true){
    console.log('status:',loggedinStatus);
    alert('Login Successfull');
      history.push('/dashboard')
  }

  return (
    
    <>
        <LP_Header />
        <div className="main-container">
          <div className="Signin-box">
              <div className="Signin-header">
            <h2 className="Signin-title">Welcome Back</h2>
              </div>
              <form name="login" className="login">
                  <Label className="label">Username</Label>
                  <br />
                  <Input className="input" type="text" name="username" defaultValue="jane_doe"/>
                  <br />
                  <Label className="label">Password</Label>
                  <br />
                  <Input className="input" type="password" name="password" defaultValue="passmeinnow"/>
                  <br/>
                  <SubmitButton onClick={handleBtnClick}>Continue</SubmitButton>
                  <SubmitButton onClick={handleBtnCancel}>Cancel</SubmitButton>
                  <br/>
                  <p>Don't have an account? <a href="" onClick={handlebtnChange}>Signup</a></p>
              </form>
          </div>
        </div>   
    </>
  );
}

export default Signin;