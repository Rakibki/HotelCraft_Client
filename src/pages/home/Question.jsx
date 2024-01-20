import { Grid, TextField } from "@mui/material";
import questios1 from "../../assets/questios1.jpg";
import questios2 from "../../assets/questios2.jpg";

const Question = () => {
  return (
    <Grid overflow={"hidden"} container spacing={3}>
      <Grid xs={8}>
        <TextField
          id="standard-basic"
          label="Enter Your Name"
          variant="standard"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Enter Your Email"
          variant="standard"
        />
        <br />

        <TextField
          //   fullWidth={true}
          multiline={true}
          rows={4}
          id="standard-basic"
          label="Enter Your Message"
          variant="standard"
        />
      </Grid>

      <Grid xs={4}>
        <img src={questios1} alt="" />
      </Grid>
    </Grid>
  );
};

export default Question;
