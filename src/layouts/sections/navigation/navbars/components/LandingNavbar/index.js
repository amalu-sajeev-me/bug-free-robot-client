import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

function LandingNavbar() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25} zindex={.4}>
      <DefaultNavbar
        routes={routes}
        transparent
        relative
        light
      />
    </MKBox>
  );
}

export default LandingNavbar;
