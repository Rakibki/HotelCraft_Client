import { Grid, Typography } from "@mui/material";
import "./style.css";

const Title = ({ text }) => {
  return (
    <Grid marginX={"auto"} width={"40%"}>
      <div className="one">
        <Typography variant="h4">{text}</Typography>
      </div>
    </Grid>
  );
};

export default Title;
