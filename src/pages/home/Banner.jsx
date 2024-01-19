import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import {Grid} from "@mui/material"
import banner1 from "../../assets/slider.webp"

const Banner = () => {
  return (
    <AwesomeSlider>
      <Grid>
        <img src={banner1} alt="" />
      </Grid>
      <Grid>
        <img src={banner1} alt="" />
      </Grid>
    </AwesomeSlider>
  );
};

export default Banner;
