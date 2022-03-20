import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import acmeImg from "../Files/acme-img.png";

const Home = () => {
  return (
    <div className="HomeGrid">
      <h5>Bienvenidos al sitio número 1 de Acme :D</h5>
      <img className="App-logo" src={acmeImg} alt="acme-logo" />
      <div className="ClearFix" />
      <Link to="/personas" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          style={{
            borderRadius: 5,
            backgroundColor: "#f5bea4",
            padding: "1rem",
            fontSize: "calc(7px + 2vmin)",
            color: "#b21c22",
            margin: "4rem",
            fontFamily: "Playfair Display",
            width: "50%",
          }}
        >
          Ver Personas
        </Button>
      </Link>
    </div>
  );
};

export default Home;
