import React from 'react';
import { calcularTarifaEnvio, mensajeEnvio } from './logica/eco-envios.js';

export default function EcoEnvios() {
  const userAge = 29;
  const purchaseAmount = 45;
  const isEcoMember = true;
  const tarifa = calcularTarifaEnvio(userAge, purchaseAmount, isEcoMember);

  return (
    <div style={{
      backgroundColor: '#f1f8f3',
      border: '1px solid #9fc7ae',
      borderRadius: '16px',
      padding: 'clamp(20px, 4vw, 32px)',
      color: '#183d2b',
    }}>
      <p className="etiqueta">ECOSHOP SOLUTIONS · GREENTECH</p>
      <h3>Tu envío, calculado con cuidado</h3>
      <dl className="datos-envio">
        <div><dt>Edad del cliente</dt><dd>{userAge} años</dd></div>
        <div><dt>Importe de la compra</dt><dd>{purchaseAmount.toFixed(2)} €</dd></div>
        <div><dt>Club verde</dt><dd>{isEcoMember === true ? 'Miembro' : 'Sin membresía'}</dd></div>
      </dl>
      <p className="resultado resultado-eco">{mensajeEnvio(tarifa)}</p>
      <p className="nota">El envío gratuito tiene prioridad. La tarifa Eco se aplica a miembros de 18 a 65 años, ambos incluidos, cuando no corresponde la gratuidad.</p>
    </div>
  );
}
