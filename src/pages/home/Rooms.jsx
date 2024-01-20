import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Title from "../../shared/title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Room from "../../components/room/Room";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

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
          {rooms.map((roomData, index) => (
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
