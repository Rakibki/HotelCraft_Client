import { Grid, Typography } from "@mui/material";
import Title from "../../shared/title/Title";
import food from "../../assets/food-1.webp";
import taxi from "../../assets/taxi-icon-1.webp";
import wifi from "../../assets/wifi-icon-1.webp";
import swim from "../../assets/swim-icon-1.webp";

const Services = () => {
  return (
    <Grid>
      <Title text={"Our Services"} />

      <Grid container spacing={3}>
        <Grid padding={8} item xs={3}>
          <Grid container justifyContent={"center"}>
            <img src={food} alt="" />
          </Grid>
          <Typography marginY={2} textAlign={"center"} variant="h5">
            Breakfast
          </Typography>
          <Typography textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmo
          </Typography>
        </Grid>

        <Grid padding={8} item xs={3}>
          <Grid container justifyContent={"center"}>
            <img src={wifi} alt="" />
          </Grid>
          <Typography marginY={2} textAlign={"center"} variant="h5">
            Free Wifi
          </Typography>
          <Typography textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmo
          </Typography>
        </Grid>

        <Grid padding={8} item xs={3}>
          <Grid container justifyContent={"center"}>
            <img src={taxi} alt="" />
          </Grid>
          <Typography marginY={2} textAlign={"center"} variant="h5">
            Airport Taxi
          </Typography>
          <Typography textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmo
          </Typography>
        </Grid>

        <Grid padding={8} item xs={3}>
          <Grid container justifyContent={"center"}>
            <img src={swim} alt="" />
          </Grid>
          <Typography marginY={2} textAlign={"center"} variant="h5">
            Swimming Pool
          </Typography>
          <Typography textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmo
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
