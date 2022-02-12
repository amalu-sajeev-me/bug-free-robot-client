import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import SimpleFooter from "examples/Footers/SimpleFooter";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Stack } from "@mui/material";

function SignInBasic() {

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
          <Grid item xs={11} sm={7} md={2.5} lg={2} xl={3}>
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
                    <MKInput type="text" label="FirstName" fullWidth />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput type="text" label="LastName" fullWidth />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput type="email" label="Email" fullWidth />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput type="text" label="Username" fullWidth />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput type="date" label="" fullWidth />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput type="password" label="Password" fullWidth />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput type="password" label="Confirm Password" fullWidth />
                  </MKBox>
                  <MKBox mt={1} mb={.2} >
                  <Stack direction="column" spacing={1} mt={2} color="white">
                    <MKButton variant="gradient" color="info" fullWidth>sign in</MKButton>
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
