import { Grid } from "@mui/material";
import Title from "../../shared/title/Title";

const CheckAvailability = () => {
  return (
    <Grid>
      <Title text={"Check Availability"} />

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <input type="text" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CheckAvailability;
