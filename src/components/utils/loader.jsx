import React from "react";
import "./utils.css";
import { CircularProgress } from "@mui/material";

const Loader1 = () => {
  return (
    <div id="preloader">
      <CircularProgress />
    </div>
  );
};

export default Loader1;
