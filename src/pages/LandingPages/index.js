import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/bg-coworking.jpeg";
import { Link as RLink } from "react-router-dom";
import SimpleFooter from "examples/Footers/SimpleFooter";
import LandingPageNavbar from "examples/Navbars/LandingPageNavbar"

function LandingPage() {
  return (
    <MKBox component="header" position="relative" height="100%">
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <LandingPageNavbar />
        </Container>
      </MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: ({
            palette: { gradients },
            functions: { linearGradient, rgba },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={9}
            lg={9}
            position="relative"
            left="20%"
            top="10px"
            flexDirection="column"
            justifyContent="center"
          >
            <MKTypography
              variant="h2"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Introduction
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              pr={6}
              mr={6}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </MKTypography>
          </Grid>
        </Container>
        <Container>
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={7}
            position="relative"
            left="6%"
            flexDirection="column"
            justifyContent="center"
          >
            <MKTypography
              variant="h4"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Welcome
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              pr={0}
              mr={0}
            >
              The time is now for it be okay to be great. People in this world
              shun people for being nice.
            </MKTypography>
            <Grid 
              item
              lg={12}
              position="relative"
              right="2%"
            >
              <Stack direction="row" spacing={2} mt={3}>
                <RLink to="/sign-up">
                  <MKButton color="white">Join the community</MKButton>
                </RLink>
                <RLink to="/sign-in">
                  <MKButton color="white">Already a member</MKButton>
                </RLink>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </MKBox>
  );
}

export default LandingPage;
