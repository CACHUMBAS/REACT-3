import React from 'react';

export function Detalles({ valor }) {
  return <li><b>{valor.nombre}</b></li>;
}

export function Completo({ valor }) {
  // Un <ul> necesita elementos <li>; el párrafo del ejemplo va dentro.
  return <li><p>{valor.id} - <b>{valor.nombre}</b> - <b>{valor.apellido}</b></p></li>;
}

export function VerDatos({ datos }) {
  return datos.id === 1 ? <Detalles valor={datos} /> : <Completo valor={datos} />;
}

export default function ProgramaListadoAlumnos() {
  // Cambia el ID por 2 y guarda el archivo para ver la segunda rama.
  const Alumno = { id: 1, nombre: 'Ana', apellido: 'Alvarez' };

  return (
    <div>
      <h3>Datos Alumno</h3>
      <p className="datos">ID de la constante: <strong>{Alumno.id}</strong></p>
      <ul className="resultado listado"><VerDatos datos={Alumno} /></ul>
      <p className="nota">Con el número 1 se ve solo Ana. Al cambiarlo por 2 se ve 2 - Ana - Alvarez.</p>
    </div>
  );
}
