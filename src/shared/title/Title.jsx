import { Typography } from "@mui/material";

const Title = ({ text }) => {
  return (
    <Typography marginY={10} variant="h3" textAlign={'center'}>
      {text}
    </Typography>
  );
};

export default Title;
