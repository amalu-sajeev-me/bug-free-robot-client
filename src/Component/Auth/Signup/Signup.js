import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Login.css";
import LP_Header from "../../Header/LP_Header";
import { Form as form, Label, Input, SubmitButton } from "../Common";
import axios from "axios";

function Signup() {
  const history = useHistory();
  
  const cancelBtnClick = (e) => {
    e.preventDefault();
    history.push('/signin')
  }

  const handleCancel = (e) => {
    e.preventDefault();
    history.push('/')
  }
  const [loggedinStatus, setLoggedinStatus] = useState(false);

  function handleBtnClick(e) {
    e.preventDefault();

    (async function () {
      const form = document.forms[0];
      const firstName = form.elements.namedItem('firstName').value;
      const lastName = form.elements.namedItem('lastName').value;
      const dateOfBirth = form.elements.namedItem('dateOfBirth').value;
      const phone = form.elements.namedItem('phone').value;
      const email = form.elements.namedItem('email').value;
      const username = form.elements.namedItem('username').value;
      const password = form.elements.namedItem('password').value;
      console.log(firstName, lastName, dateOfBirth, phone, email, username, password);
      const loginRequest = new URL("https://bug-free.herokuapp.com/api/members/checkin");
      axios.post(loginRequest, {
          firstName: `${firstName}`,
          lastName: `${lastName}`,
          dateOfBirth:`${dateOfBirth}`,
          phone:`${phone}`,
          email:`${email}`,
          username:`${username}`,
          password:`${password}`
      },{
        withCredentials: true
      }).then(res => {
          console.log("loggedin status", loggedinStatus);
          console.log("response result:", res.data.status);
          if (res.data.status === true) {
            console.log("logging in .. . ");
            setLoggedinStatus(true)
          };
      })
    })();
  }
  if(loggedinStatus === true){
    console.log(loggedinStatus);
    alert('Registration Successfull')
    history.push('/dashboard');
  }
   


  return (
    <>
        <LP_Header />
        <div className="main-container">
          <div className="Signup-box">
              <div className="Signup-header">
              <h2 className="Signup-title">Create your Account</h2>
              </div>
              <form name="register" className="register">
                  <Label className="label">Enter FirstName</Label>
                  <br/>
                  <Input className="input" type="text" name="firstName" defaultValue="" placeholder="FirstName"/>
                  <br/>
                  <Label className="label">Enter LastName</Label>
                  <br/>
                  <Input className="input" type="text" name="lastName" defaultValue="" placeholder="LastName"/>
                  <br/>
                  <Label className="label">Enter DOB</Label>
                  <br/>
                  <Input className="input" type="date" name="dateOfBirth" defaultValue="" placeholder="Date of Birth"/>
                  <br/>
                  <Label className="label">Enter Phone no.</Label>
                  <br/>
                  <Input className="input" type="text" name="phone" defaultValue="" placeholder="Phone No."/>
                  <br/>
                  <Label className="label">Enter Email</Label>
                  <br/>
                  <Input className="input" type="text" name="email" defaultValue="" placeholder="Email"/>
                  <br/>
                  <Label className="label">Enter Username</Label>
                  <br/>
                  <Input className="input" type="text" name="username" defaultValue="" placeholder="Username"/>
                  <br/>
                  <Label className="label">Enter Password</Label>
                  <br/>
                  <Input className="input" type="password" name="password" defaultValue="" placeholder="Password"/>
                  <br/>
                  <SubmitButton onClick={handleBtnClick}>Continue</SubmitButton>
                  <SubmitButton onClick={handleCancel}>Cancel</SubmitButton>
                  <br />
                  <p>Already have an account? <a href="" onClick={cancelBtnClick}>Signin</a></p>
              </form>
          </div>
        </div>
      </>
  );
}
export default Signup;