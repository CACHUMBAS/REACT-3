import React from 'react';
import { inicioVotacion } from './logica/exercicis.js';

export default function ProgramaVotacion() {
  const edad = 99;

  return (
    <div>
      <h3>Máquina para votar</h3>
      <p className="datos">Edad: <strong>{edad} años</strong></p>
      <p className="resultado">{inicioVotacion(edad)}</p>
      <p className="nota">La validación rechaza los valores superiores a 100. Con 100 aún se puede votar.</p>
    </div>
  );
}
