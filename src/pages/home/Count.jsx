import { Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Count = () => {
  return (
    <Grid container marginY={10} spacing={3}>
      <Grid item xs={3} >
        <Typography variant="h5">LUXURY ROOMS</Typography>
        <VisibilitySensor partialVisibility offset={{}}>
          {({ isVisible }) => (
            <div style={{ height: 100 }}>
              <Typography variant="h5">
                {isVisible ? <CountUp end={1000} /> : null}
              </Typography>
            </div>
          )}
        </VisibilitySensor>
      </Grid>


      <Grid item xs={3} >
        <Typography variant="h5">LUXURY ROOMS</Typography>
        <VisibilitySensor partialVisibility offset={{}}>
          {({ isVisible }) => (
            <div style={{ height: 100 }}>
              <Typography variant="h5">
                {isVisible ? <CountUp end={1000} /> : null}
              </Typography>
            </div>
          )}
        </VisibilitySensor>
      </Grid>


      <Grid item xs={3} >
        <Typography variant="h5">GUESTS</Typography>
        <VisibilitySensor partialVisibility offset={{}}>
          {({ isVisible }) => (
            <div style={{ height: 100 }}>
              <Typography variant="h5">
                {isVisible ? <CountUp end={1000} /> : null}
              </Typography>
            </div>
          )}
        </VisibilitySensor>
      </Grid>


      <Grid item xs={3} >
        <Typography variant="h5">FIVE STAR RATINGS</Typography>
        <VisibilitySensor partialVisibility offset={{}}>
          {({ isVisible }) => (
            <div style={{ height: 100 }}>
              <Typography variant="h5">
                {isVisible ? <CountUp end={1000} /> : null}
              </Typography>
            </div>
          )}
        </VisibilitySensor>
      </Grid>
    </Grid>
  );
};

export default Count;
