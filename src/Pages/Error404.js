import React from "react";
import { Alert, AlertTitle, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Error404 = () => {
  let url = useLocation();
  return (
    <>
      <Alert
        severity="error"
        style={{ maxWidth: "80%", margin: "2rem auto 0" }}
      >
        <AlertTitle>Error</AlertTitle>
        La dirección{" "}
        <b>
          <i>{url.pathname}</i>
        </b>{" "}
        no fue encontrada.
      </Alert>
      <div>
        <Link to="/">
          <IconButton color="primary" style={{margin: "1rem auto 0"}}>
            <HomeIcon />
          </IconButton>
        </Link>
      </div>
    </>
  );
};

export default Error404;
