import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import SimpleFooter from "examples/Footers/SimpleFooter";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Stack } from "@mui/material";
import axios from "axios";

function SignInBasic(){
  const navigate = useNavigate();
  const [usernme, setUsername] = useState();
  const [ password, setPassword ] = useState();
  const [ msg, setMsg ] = useState();
  const [ successful, setSuccessful ] = useState(false);

  const onChangeUsername = (e) => {
    setUsername({
      username: e.target.value
    });
  }
  const onChangePassword = (e) => {
    setPassword({
      password: e.target.value
    });
  }

  const handleRegister = (e) => {
    setMsg({
      msg: "",
      successful: false
    });
  }
  const [loggedinStatus, setLoggedinStatus] = useState(false);
  useEffect(() => {
    console.log('status:',loggedinStatus);
  })

  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

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
  console.log('loginstatus:',loggedinStatus);
  alert("success")
  navigate('/dashboard')
}

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
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="text" label="Username" name="username" fullWidth defaultValue=""/>
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" label="Password" name="password" fullWidth defaultValue=""/>
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                  <Stack direction="column" spacing={1} mt={2} color="white">
                    <MKButton variant="gradient" color="info" fullWidth onClick={handleBtnClick}>sign in</MKButton>
                    <Link to="/"><MKButton variant="gradient" color="info" fullWidth>cancel</MKButton></Link>
                  </Stack>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/sign-up"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
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
}

export default SignInBasic;
