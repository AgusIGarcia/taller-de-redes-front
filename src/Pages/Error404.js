import React from "react";
import { IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Error404 = () => {
  let url = useLocation();
  return (
    <>
      <h5>Error</h5>
      <p>
        {" "}
        La dirección{" "}
        <b>
          <i>{url.pathname}</i>
        </b>{" "}
        no fue encontrada.
      </p>
      <div className="LogoHome">
        <Link to="/">
          <IconButton color="primary">
            <HomeIcon />
          </IconButton>
        </Link>
      </div>
    </>
  );
};

export default Error404;
