import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RoomDetails = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState({});

  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const roomData = data.find((item) => item._id == roomId);
        setRoom(roomData);
      });
  }, []);

  return (
    <Grid>
      <img src={room?.images?.[0]} alt="" />
      <Typography variant="h2">{room.title}</Typography>
    </Grid>
  );
};

export default RoomDetails;
