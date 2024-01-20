import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routes";
import AuthProvaider from "./providers/AuthProvaider";
import { Grid } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Grid maxWidth={"1250px"} sx={{margin: "0px auto"}}>
      <AuthProvaider>
        <RouterProvider router={router} />
      </AuthProvaider>
    </Grid>
  </React.StrictMode>
);
