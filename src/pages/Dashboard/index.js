import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import bgImage from "assets/images/bg-coworking.jpeg";
import SimpleFooter from "examples/Footers/SimpleFooter";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import MKTypography from "components/MKTypography";
import SideBar from "examples/Navbars/SideBar";

function Dashboard() {
  return (
    <MKBox component="header" position="relative" height="100%">
      <MKBox component="nav" position="absolute" top="0rem" width="100%">
          <HomeNavbar />
      </MKBox>
      <MKBox component="nav" position="absolute" top="5rem" width="100%" textAlign="center">
        <Container>
          <MKTypography
            color="white"
            variant="h4"
          >
            THIS IS A SEARCH BAR
          </MKTypography>
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
          <Grid
            container
            item
            xs={12}
            md={9}
            lg={8}
            position="relative"
            left="5%"
            bottom="150px"
          >
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.7}
              pr={0}
              mr={0}
            >
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old. Richard McClintock, a Latin professor 
            at Hampden-Sydney College in Virginia, looked up one of the more obscure 
            Latin words, consectetur, from a Lorem Ipsum passage, and going through 
            the cites of the word in classical literature, discovered the undoubtable 
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus 
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
            This book is a treatise on the theory of ethics, very popular during the Renaissance. 
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </MKTypography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={1}
            position="relative"
            left="22%"
            bottom="315px"
          >
            <MKTypography
            color="white"
            variant="h5"
          >
            <SideBar />
          </MKTypography>
            
          </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </MKBox>
  );
}

export default Dashboard;
