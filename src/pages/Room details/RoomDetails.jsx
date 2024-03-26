import { Button, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import currentUser from "../../utils/currentUser";
import { v4 as uuidv4 } from "uuid";

const RoomDetails = () => {
  const { roomId } = useParams();
  const axiosLocal = useAxiosLocal();
  const { user, loadding } = useContext(authContext);

  const { isPending, data: room } = useQuery({
    queryKey: ["Room"],
    queryFn: async () => {
      const res = await axiosLocal.get(`/api/v1/room/${roomId}`);
      return res?.data;
    },
  });

  const { isPending: loaaading, data: Comments } = useQuery({
    queryKey: ["Comments"],
    queryFn: async () => {
      const res = await axiosLocal.get(`/api/v1/comments/${roomId}`);
      return res?.data;
    },
  });

  console.log(Comments);

  if (isPending || loadding || loaaading) {
    return <Loader />;
  }

  const handleComment = async (e) => {
    const userForDb = currentUser();
    e.preventDefault();
    const message = e.target.comment.value;

    if (!user) {
      alert("first Login");
    } else if (room?.host?.userId === userForDb?.userId) {
      alert("toamt roomer tumi comment korte parba na");
    } else {
      const commentData = {
        commentId: uuidv4(),
        roomId: room?._id,
        userId: userForDb?.userId,
        message: message,
      };
      axiosLocal.post("/api/v1/comment", commentData);
    }
  };

  const hanleReservation = async () => {
    const userForDb = await currentUser();
    if (!user) {
      return alert("first Login");
    }

    const reservationData = {
      userId: userForDb?.userId,
      roomId: room?._id,
      data: new Date().toDateString(),
      checkInDate: "2001",
      CheckOutDate: "2002",
      Adults: 2,
      Children: 2,
      roomStatus: "check out",
    };

    const res = await axiosLocal.post(
      "/api/v1/room/reservation",
      reservationData
    );

    console.log(res);
  };

  return (
    <Grid>
      <img src={room?.images?.[0]} alt="" />
      <Typography variant="h2">{room?.title}</Typography>

      <Button onClick={hanleReservation} variant="contained">
        reservation
      </Button>

      <Grid padding={"40px"}>
        <Typography marginBottom={"30px"} variant="h2">
          Comments
        </Typography>

        <form onSubmit={handleComment}>
          <input placeholder="Your Message" type="text" name="comment" id="" />
          <button type="submit">Comment</button>
        </form>
      </Grid>
    </Grid>
  );
};

export default RoomDetails;
