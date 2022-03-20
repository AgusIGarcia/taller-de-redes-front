import React from "react";

const ListarPersonas = ({personas}) => {
  return (
    <>
      <h6>Lista Personas</h6>
      {personas.map((per)=><p>{per.nombre} {per.apellido} - Rol: {per.rol}</p>)}
    </>
  );
};


export default ListarPersonas;
