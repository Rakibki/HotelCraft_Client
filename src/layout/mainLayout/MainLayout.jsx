import { Outlet } from "react-router-dom";
import Navber from "../../components/navber/Navber";
import Footer from "../../components/footer/Footer";
import { Grid } from "@mui/material";

const MainLayout = () => {
  return (
    <Grid>
      <Navber />
      <Outlet />
      <Footer />
    </Grid>
  );
};

export default MainLayout;
