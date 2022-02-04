import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Login.css";
import validation from "../validation";
import LP_Header from "../../Header/LP_Header";
import { Form, Label, Input, SubmitButton } from "../Common";

function Signup() {
  const history = useHistory();
  const [values, setValues] = useState({
    firstName: "",
    lastName:"",
    dateOfBirth:"",
    phone:"",
    username:"",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleCancel = (e) => {
    e.preventDefault();
    history.push('/')
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
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
    e.preventDefault();
    setErrors(validation(values));
    const res = await fetch('https://bug-free.herokuapp.com/api/members/checkin',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-type': 'application/json',
            'Accept':'application/json'
        }
    });
    const result = await res.json();
    console.log(result);
  };
  const handlebtnChange = (e) => {
    e.preventDefault();
    history.push('/signin');
    console.log(values);
  }
  return (
    <>
        <LP_Header />
        <div className="Signup-box">
            <div className="Signup-header">
            <h2 className="Signup-title">Create your Account</h2>
            </div>
            <Form >
                <Label>Enter FirstName</Label>
                <br/>
                <Input type="text" name="firstName" value={values.firstName} onChange={handleChange}/>
                {errors.firstName && (<p className="SG-error">{errors.fullname}</p>)}
                <br/>
                <Label>Enter LastName</Label>
                <br/>
                <Input type="text" name="lastName" value={values.lastName} onChange={handleChange}/>
                {errors.lastName && (<p className="SG-error">{errors.lastName}</p>)}
                <br/>
                <Label>Enter DOB</Label>
                <br/>
                <Input type="date" name="dateOfBirth" value={values.dateOfBirth} onChange={handleChange}/>
                {errors.dateOfBirth && (<p className="SG-error">{errors.dateOfBirth}</p>)}
                <br/>
                <Label>Enter Phone no.</Label>
                <br/>
                <Input type="text" name="phone" value={values.phone} onChange={handleChange}/>
                {errors.phone && (<p className="SG-error">{errors.phone}</p>)}
                <br/>
                <Label>Enter Email</Label>
                <br/>
                <Input type="text" name="email" value={values.email} onChange={handleChange}/>
                {errors.email && (<p className="SG-error">{errors.email}</p>)}
                <br/>
                <Label>Enter Username</Label>
                <br/>
                <Input type="text" name="username" value={values.username} onChange={handleChange}/>
                {errors.username && (<p className="SG-error">{errors.username}</p>)}
                <br/>
                <Label>Enter Password</Label>
                <br/>
                <Input type="password" name="password" value={values.password} onChange={handleChange}/>
                {errors.password && (<p className="SG-error">{errors.password}</p>)}
                <br/>
                <SubmitButton onClick={handlebtnClick}>Continue</SubmitButton>
                <SubmitButton onClick={handleCancel}>Cancel</SubmitButton>
                <br />
                <p>Already have an account? <a href="" onClick={handlebtnChange}>Signin</a></p>
            </Form>
        </div>
    </>
  );
}
export default Signup;