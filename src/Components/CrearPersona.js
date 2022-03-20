import { IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import Persona from "../Persona";
import API from "./API";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem",
  },
  textField: {
    fontFamily: "Playfair Display",
    width: "15rem",
    margin: "1rem",
    color: "white",
  },
  input: {
    color: "#f5bea4",
    fontFamily: "Playfair Display",
  },
  select: {},
}));

const personaInicial = new Persona("", "", "");

const CrearPersona = ({ setPersonas }) => {
  const [persona, setPersona] = useState(personaInicial);

  const clasess = useStyles();
  const api = new API();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let nuevaPersona = new Persona(
      persona.nombre,
      persona.apellido,
      persona.rol
    );
    await api.createPersona(nuevaPersona);
    setPersonas((prev) => [...prev, nuevaPersona]);
    setPersona(personaInicial);
  };

  return (
    <>
      <h6>Crear Personas</h6>
      <form autoComplete="off" onSubmit={handleSubmit} className={clasess.root}>
        <TextField
          id="nombre"
          name="nombre"
          label="Nombre"
          size="small"
          variant="standard"
          color="primary"
          focused
          required
          className={clasess.textField}
          value={persona.nombre}
          onChange={(e) => {
            setPersona({ ...persona, nombre: e.target.value });
          }}
          InputProps={{
            className: clasess.input,
          }}
        />
        <TextField
          id="apellido"
          name="apellido"
          label="Apellido"
          variant="standard"
          color="primary"
          focused
          size="small"
          required
          className={clasess.textField}
          value={persona.apellido}
          onChange={(e) => {
            setPersona({ ...persona, apellido: e.target.value });
          }}
          InputProps={{
            className: clasess.input,
          }}
        />
        <TextField
          id="rol"
          name="rol"
          label="Rol"
          variant="standard"
          color="primary"
          focused
          size="small"
          required
          className={clasess.textField}
          value={persona.rol}
          onChange={(e) => {
            setPersona({ ...persona, rol: e.target.value });
          }}
          InputProps={{
            className: clasess.input,
          }}
        />
        <IconButton color="primary" type="Sumbit">
          <AddIcon />
        </IconButton>
      </form>
    </>
  );
};

export default CrearPersona;
