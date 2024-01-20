import { Grid, Typography } from "@mui/material";
import logo from "../../assets/logoFooter.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Grid
      sx={{ maxWidth: "1250px", margin: "0px auto" }}
      container
      spacing={3}
      padding={7}
      bgcolor={"#111111"}
    >
      <Grid item xs={4}>
        <Grid>
          <img src={logo} alt="" />
        </Grid>
        <Typography marginTop={4} color={"#8a8a8a"} variant="p">
          Call. +00 123 456 789
        </Typography>{" "}
        <br />
        <Typography marginTop={2} color={"#8a8a8a"} variant="p">
          Email. hello@sailing.com
        </Typography>{" "}
        <br />
        <Typography marginTop={2} color={"#8a8a8a"} variant="p">
          329 Queensberry Street, North Melbourne VIC 3051, Australia.
        </Typography>
      </Grid>
      <Grid color={"#8a8a8a"} item xs={2}>
        <ul>
          <li>
            <Link>About us</Link>
          </li>
          <li>
            <Link>Work Here</Link>
          </li>
          <li>
            <Link>Team</Link>
          </li>
          <li>
            <Link>Happenings</Link>
          </li>
        </ul>
      </Grid>
      <Grid item xs={2}>
        <ul>
          <li>
            <Link>Support</Link>
          </li>
          <li>
            <Link>FAQs</Link>
          </li>
          <li>
            <Link>Warranty</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
      </Grid>

      <Grid item xs={4}>
        <Typography color={"#8a8a8a"} variant="h4">
          Get Our Newsletter
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
