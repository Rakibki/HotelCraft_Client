import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import { Grid, Rating, Typography } from "@mui/material";
import Title from "../../shared/title/Title";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  console.log(testimonials);

  return (
    <Grid minHeight={"100vh"} bgcolor={"#202020"}>
      <Grid>
        <Title text={"Testimonials"} />
      </Grid>

      <Grid
        sx={{
          width: "60%",
          marginX: "auto",
          marginTop: "50px",
          border: "2px solid #272727",
        }}
      >
        {testimonials?.length > 0 && (
          <Swiper
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {testimonials?.map((item, index) => {
              return (
                <SwiperSlide key={index} style={{ padding: "50px" }}>
                  <Grid sx={{ width: "24%", marginX: "auto" }}>
                    <img
                      style={{ borderRadius: "100%" }}
                      src={item.image}
                      alt=""
                    />
                  </Grid>
                  <Typography
                    variant="h4"
                    marginTop={"10px"}
                    textAlign={"center"}
                    color={"#fff"}
                    component="h2"
                  >
                    {item.name}
                  </Typography>

                  <Grid marginTop={"20px"} container justifyContent={"center"}>
                    <Rating
                      sx={{ color: "#f44647" }}
                      name="read-only"
                      value={4}
                      readOnly
                    />
                  </Grid>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </Grid>
    </Grid>
  );
};

export default Testimonials;
