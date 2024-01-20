import { Grid, Typography } from "@mui/material";

const Room = ({ roomData }) => {
  return (
    <Grid>
      <Grid overflow={"hidden"} width={"100%"} height={"300px"}>
        <img src={roomData?.images[0]} alt="" />
      </Grid>

      <Typography marginTop={"6px"} variant="h6">
        {roomData?.title}
      </Typography>

      <Typography marginTop={16} variant="p">
        {roomData?.description?.slice(0,120)}
      </Typography>
    </Grid>
  );
};

export default Room;
