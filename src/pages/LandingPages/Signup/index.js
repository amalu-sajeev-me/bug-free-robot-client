import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import SimpleFooter from "examples/Footers/SimpleFooter";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Stack } from "@mui/material";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import CheckButton from "react-validation/build/button";
import AuthService from "services/auth.service";
import "./style.css"

const required = (value) => {
  if (!value) {
    return (
      <div id="alert">
        This field is required!
      </div>
    );
  }
};
const fname = (value) => {
  if (value.length < 3) {
    return (
      <div id="alert">
        The firstname must be atleast 3
      </div>
    );
  }
};
const lname = (value) => {
  if (value.length < 3) {
    return (
      <div id="alert">
        The lastname must be atleast 3
      </div>
    );
  }
};
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div id="alert">
        This is not a valid email.
      </div>
    );
  }
};
const dob = (value) => {
  if (value.length < 3) {
    return (
      <div id="alert">
        Enter a valid date
      </div>
    );
  }
};
const ph = (value) => {
  if (value.length < 10) {
    return (
      <div id="alert">
        Number must be valid
      </div>
    );
  }
};
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div id="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div id="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const SignInBasic = (props) => {
  const navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmpassword, setConfirmpassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };
  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangeDob = (e) => {
    const dateOfBirth = e.target.value;
    setDateOfBirth(dateOfBirth);
  };
  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  // const onChangeConfirmPassword = (e) => {
  //   const confirmpassword = e.target.value;
  //   setPassword(confirmpassword);
  // };
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(firstName, lastName, email, dateOfBirth, phone, username, password).then(
        (response) => {
          navigate('/dashboard')
          window.location.reload();
          setMessage(response.data.message)
          setSuccessful(true)
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false)
        }
      );
    }
    console.log(successful);
  };

  return (
    <>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox
        px={1}
        width="100%"
        height="100vh"
        mx="auto"
        position="relative"
        zIndex={2}
      >
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={11} sm={9} md={5} lg={3} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="info"
                mx={1}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography
                  variant="h4"
                  fontWeight="medium"
                  color="white"
                  mt={1}
                >
                  Sign in
                </MKTypography>
              </MKBox>
              <MKBox pt={2} pb={1.5} px={1.5}>
                {!successful && (
                <Form onSubmit={handleRegister} ref={form}>
                <MKBox mb={1}>
                    <Input
                      placeholder="FirstName"
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={firstName}
                      onChange={onChangeFirstName}
                      validations={[required, fname]}
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <Input
                      placeholder="LastName"
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={lastName}
                      onChange={onChangeLastName}
                      validations={[required, lname]}
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <Input
                      placeholder="Email"
                      type="text"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required,validEmail]}
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <Input
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      value={dateOfBirth}
                      onChange={onChangeDob}
                      validations={[required,dob]}
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <Input
                      placeholder= "Phone"
                      type="text"
                      className="form-control"
                      name="phone"
                      value={phone}
                      onChange={onChangePhone}
                      validations={[required,ph]}
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <Input
                      placeholder="Username"
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      validations={[required,vusername]}
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <Input
                      placeholder="Password"
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[vpassword]}
                    />
                  </MKBox>
                  {/* <MKBox mb={1}>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      className="form-control"
                      name="Confirmpassword"
                      value=""
                      onChange={onChangeConfirmPassword}
                      validations={[vpassword]}
                    />
                  </MKBox> */}
                  <Stack direction="column" spacing={1} mt={2} color="white">
                  <button className="loginbtn">
                  <MKButton variant="gradient" color="secondary" fullWidth>
                      Sign Up
                    </MKButton>
                    </button>
                    <Link to="/"><MKButton variant="gradient" color="secondary" fullWidth>cancel</MKButton></Link>
                  </Stack>
                  <MKBox textAlign="center">
                  {message && (
                      <div id="alert">
                        {message}
                      </div>
                  )}
                  </MKBox>
                  <MKBox textAlign="center">
                    <MKTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/sign-in"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign in
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                  <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
                )}
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
};

export default SignInBasic;
