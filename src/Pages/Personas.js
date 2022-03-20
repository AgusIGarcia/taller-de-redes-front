import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../Components/API";
import HomeIcon from "@mui/icons-material/Home";
import CrearPersona from "../Components/CrearPersona";
import ListarPersonas from "../Components/ListarPersonas";

const Personas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const getLista = async () => {
      const api = new API();
      const listaPersonasAPI = await api.getLista();
      setPersonas(listaPersonasAPI);
    };

    getLista();
  }, []);


  return (
    <>
      <CrearPersona setPersonas={setPersonas} />
      <ListarPersonas personas={personas} />
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

export default Personas;
