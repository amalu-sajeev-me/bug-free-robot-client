import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import SimpleFooter from "examples/Footers/SimpleFooter";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Stack } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function SignInBasic() {
  const navigate = useNavigate();

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
      <MKBox px={1} width="100%" height="93vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={5}
                mt={-3}
                p={1}
                mb={.0}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" m1={3}>
                  Sign Up
                </MKTypography>
              </MKBox>
              <MKBox pt={2} pb={3} px={7}>
                <MKBox component="form" role="form">
                  <MKBox mb={1}>
                    <MKInput type="text" label="FirstName" name="firstName" defaultValue="" fullWidth />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput type="text" label="LastName" name="lastName" defaultValue="" fullWidth />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput type="email" label="Email" name="email" defaultValue="" fullWidth />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput type="text" label="Username" name="username" defaultValue="" fullWidth />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput type="date" label="" name="dateOfBirth" defaultValue="" fullWidth />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput type="number" label="Phone" name="phone" defaultValue="" fullWidth />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput type="password" label="Password" name="password" defaultValue="" fullWidth />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput type="password" label="Confirm Password" name="confirmpassword" defaultValue="" fullWidth />
                  </MKBox>
                  <MKBox mt={1} mb={.2} >
                  <Stack direction="column" spacing={1} mt={2} color="white">
                    <MKButton variant="gradient" color="info" onClick={handleBtnClick} fullWidth>sign in</MKButton>
                    <Link to="/"><MKButton variant="gradient" color="info" fullWidth>cancel</MKButton></Link>
                  </Stack>
                  </MKBox>
                  <MKBox mt={1} mb={.2} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Already have an account?{" "}
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
