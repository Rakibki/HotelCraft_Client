import { Grid } from "@mui/material";
import Title from "../../shared/title/Title";

const CheckAvailability = () => {
  return (
    <Grid bgcolor={"#f4f4f4"} padding={10} marginY={10}>
      <Title desc={""} text={"Check Availability"} />

      <Grid container marginTop={5} spacing={2}>
        <Grid item xs={3}>
          <input
            style={{ paddingBottom: "10px", paddingTop: "10px", width: "100%" }}
            type="date"
            defaultValue="2024-01-01"
          />
        </Grid>
        <Grid item xs={3}>
          <input
            style={{ paddingBottom: "10px", paddingTop: "10px", width: "100%" }}
            type="date"
            defaultValue="2024-01-01"
          />
        </Grid>
        <Grid item xs={3}>
          <input
            style={{ paddingBottom: "10px", paddingTop: "10px", width: "100%" }}
            type="date"
            defaultValue="2024-01-01"
          />
        </Grid>
        <Grid item xs={3}>
          <button
            style={{
              width: "100%",
              height: "100%",
              color: "#fff",
              backgroundColor: "#2eb0d1",
              border: "none",
              cursor: "pointer"
            }}
          >
            CHECK AVAILABILITY
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CheckAvailability;
