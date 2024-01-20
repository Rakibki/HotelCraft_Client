import about1 from "../../assets/about-t1.jpg";
import about2 from "../../assets/about-t2.jpg";

import { Button, Grid, Typography } from "@mui/material";

const Experience = () => {
  return (
    <Grid>
      <Grid container>
        <Grid item overflow={"hidden"} xs={6}>
          <img src={about1} alt="" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">We have 17+ years of Experience</Typography>
          <Typography variant="p">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </Typography>
          <Button variant="contained">More about us</Button>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h4">Start your Amazing Adventure!</Typography>
          <Typography variant="p">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </Typography>
          <Button variant="contained">Choose a room</Button>
        </Grid>

        <Grid item overflow={"hidden"} xs={6}>
          <img src={about2} alt="" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Experience;
