import { Grid } from "@mui/material";
import Title from "../../shared/title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Room from "../../components/room/Room";
import Loader from "../../components/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import useAxiosLocal from "../../hooks/useAxiosLocal";

const Rooms = () => {
  const axiosLocal = useAxiosLocal();

  const { isPending, data: rooms } = useQuery({
    queryKey: ["Rooms"],
    queryFn: async () => {
      const res = await axiosLocal.get("/api/v1/rooms");
      return res?.data;
    },
  });

  console.log(rooms);

  if (isPending) {
    return <Loader />;
  }

  return (
    <Grid>
      <Title text={"Our Rooms"} />

      <Grid>
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {rooms?.map((roomData, index) => (
            <SwiperSlide key={index}>
              <Room roomData={roomData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default Rooms;
