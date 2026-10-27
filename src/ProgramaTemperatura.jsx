import React from 'react';
import { clasificarTemperatura } from './logica/exercicis.js';

export default function ProgramaTemperatura() {
  const temperatura = 15;

  return (
    <div>
      <h3>Classificador de temperatura</h3>
      <p className="datos">Temperatura: <strong>{temperatura} °C</strong></p>
      <p className="resultado" lang="ca">{clasificarTemperatura(temperatura)}</p>
      <p className="nota">Criterio para los límites solapados: 10 °C entra en temperatura media y 20 °C en calor. El rango de trabajo es de 0 a 30 °C, incluidos.</p>
    </div>
  );
}
