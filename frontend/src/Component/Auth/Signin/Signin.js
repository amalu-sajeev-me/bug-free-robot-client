import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Login.css";
import validation from "../validation";
import LP_Header from "../../Header/LP_Header";
import { SubmitButton, Input, Form, Label } from "../Common";

function Signin() {
  const history = useHistory();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const handlebtnClick = async (e) => {
    e.preventDefault();
    setErrors(validation(values));
    history.push('/dashboard');
    const res = await fetch('https://bug-free.herokuapp.com/api/members/login',{
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-type': 'application/json',
                'Accept':'application/json'
            }
          });
          const json = await res.json();
          localStorage.setItem("user-info",JSON.stringify(res));
          console.log(json);
          
  };
  const handlebtnChange = (e) => {
    e.preventDefault();
    history.push('/signup');
  }
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
                <SubmitButton onClick ={handlebtnChange}>Not a member</SubmitButton>
            </Form>
        </div>   
    </>
  );
}

export default Signin;