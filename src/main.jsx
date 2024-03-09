import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routes";
import AuthProvaider from "./providers/AuthProvaider";
import { Grid } from "@mui/material";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Grid paddingX={"30px"} maxWidth={"1450px"} sx={{ margin: "0px auto" }}>
        <AuthProvaider>
          <RouterProvider router={router} />
        </AuthProvaider>
      </Grid>
    </QueryClientProvider>
  </React.StrictMode>
);
