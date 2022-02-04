import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Login.css";
import validation from "../validation";
import LP_Header from "../../Header/LP_Header";
import { SubmitButton, Input, Form, Label } from "../Common";
import Dashboard from "../../Dasboard/Dashboard";
import Home from "../../Home/Home";

function Signin() {
  const history = useHistory();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleCancel = (e) => {
    e.preventDefault();
    history.push('/')
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const [isloggedin, setIsLoggedIn] = useState(false);

  useEffect(async() => {
    const res = await fetch('https://bug-free.herokuapp.com/api/members/login',{
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-type': 'application/json',
                'Accept':'application/json'
            }
          });
          const result = await res.json();
          localStorage.setItem("user-info",JSON.stringify(res));
          console.log(result.status);
          if(result.status === true){
            setIsLoggedIn(true)
            console.log(isloggedin);
          }
          
  }, []);

  const handlebtnClick = async (e) => {
    setErrors(validation(values));
    e.preventDefault()
    const res = await fetch('https://bug-free.herokuapp.com/api/members/login',{
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-type': 'application/json',
                'Accept':'application/json'
            }
          });
          const result = await res.json();
          localStorage.setItem("user-info",JSON.stringify(res));
          console.log(result);
          if((result.status) === true){
            setIsLoggedIn(true)
            console.log(isloggedin);
          }
  };
  const handlebtnChange = (e) => {
    history.push('/signup');
  }
  // if(isloggedin === true){
  //   return (
  //     <Dashboard/>
  //   )
  // }else if(isloggedin === false){
  //   alert('loggin failed click okay to go back to home');
  //   <Home />
  // }
  return (
    <>
        <LP_Header />
        <div className="Signin-box">
            <div className="Signin-header">
                <h2 className="Signin-title">Welcome Back</h2>
            </div>
            <Form>
                <Label>Username</Label>
                <br />
                <Input type="text" name="username" value={values.username} onChange={handleChange} />
                {errors.username && (<p className="SG-error">{errors.username}</p>)}
                <br />
                <Label>Password</Label>
                <br />
                <Input type="password" name="password" value={values.password} onChange={handleChange}/>
                {errors.password && (<p className="SG-error">{errors.password}</p>)}
                <br/>
                <SubmitButton onClick={handlebtnClick}>Continue</SubmitButton>
                <SubmitButton onClick={handleCancel}>Cancel</SubmitButton>
                <br/>
                <p>Don't have an acoount? <a href="" onClick={handlebtnChange}>Signup</a></p>
            </Form>
        </div>   
    </>
  );
}

export default Signin;