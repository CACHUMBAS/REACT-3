import test from 'node:test';
import assert from 'node:assert/strict';
import { calcularTarifaEnvio, mensajeEnvio } from '../src/logica/eco-envios.js';

// Valores esperados literales en céntimos, independientes del cálculo.
const casos = [
  [17, 45, false, 0],
  [17, 45, true, 0],
  [17, 80, true, 0],
  [18, 45, true, 150],
  [18, 45, false, 495],
  [29, 45, true, 150],
  [29, 45, false, 495],
  [65, 50, true, 150],
  [65, 50, false, 495],
  [66, 50, true, 495],
  [29, 50, true, 150],
  [29, 50, false, 495],
  [29, 50.01, true, 0],
  [29, 50.01, false, 0],
  [66, 100, true, 0],
  [0, 0, false, 0],
  [29, 45, 'true', 495],
];

for (const [edad, importe, miembro, esperado] of casos) {
  test(`GreenTech: ${edad} años, ${importe} €, miembro ${miembro} → ${esperado} céntimos`, () => {
    assert.equal(calcularTarifaEnvio(edad, importe, miembro), esperado);
  });
}

test('GreenTech: mensajes exactos del enunciado', () => {
  assert.equal(mensajeEnvio(0), '¡Envío Gratuito! (0€)');
  assert.equal(mensajeEnvio(150), 'Tarifa Eco: 1.50€');
  assert.equal(mensajeEnvio(495), 'Tarifa Estándar: 4.95€');
});

test('GreenTech: no se calcula una tarifa con edad o importe inválidos', () => {
  assert.equal(calcularTarifaEnvio(-1, 45, true), null);
  assert.equal(calcularTarifaEnvio(29, -1, true), null);
  assert.equal(calcularTarifaEnvio(NaN, 45, false), null);
  assert.equal(calcularTarifaEnvio(29, Infinity, false), null);
  assert.equal(calcularTarifaEnvio('29', 45, true), null);
  assert.equal(mensajeEnvio(null), 'Datos no válidos');
});

test('GreenTech: el resultado no depende de cálculos anteriores', () => {
  assert.equal(calcularTarifaEnvio(29, 45, true), 150);
  assert.equal(calcularTarifaEnvio(17, 99, true), 0);
  assert.equal(calcularTarifaEnvio(66, 45, true), 495);
  assert.equal(calcularTarifaEnvio(29, 45, true), 150);
});
