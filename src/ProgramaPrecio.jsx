import React from 'react';
import { inicioPrecio } from './logica/exercicis.js';

export default function ProgramaPrecio() {
  const edad = 25;

  return (
    <div>
      <h3>Precio billete autobús</h3>
      <p className="datos">Edad: <strong>{edad} años</strong></p>
      <p className="resultado">{inicioPrecio(edad)}</p>
      <p className="nota">Menores de 18 y personas de 65 o más: gratis. De 18 a 64: 1 €.</p>
    </div>
  );
}
