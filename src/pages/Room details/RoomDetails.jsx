import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import { useQuery } from "@tanstack/react-query";

const RoomDetails = () => {
  const { roomId } = useParams();
  const axiosLocal = useAxiosLocal();

  const { isPending, data: room } = useQuery({
    queryKey: ["Room"],
    queryFn: async () => {
      const res = await axiosLocal.get(`/api/v1/room/${roomId}`);
      return res?.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <Grid>
      <img src={room?.images?.[0]} alt="" />
      <Typography variant="h2">{room.title}</Typography>
    </Grid>
  );
};

export default RoomDetails;
