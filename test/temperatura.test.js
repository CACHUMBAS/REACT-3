import test from 'node:test';
import assert from 'node:assert/strict';
import { clasificarTemperatura } from '../src/logica/exercicis.js';

for (const [valor, esperado] of [
  [0, 'Molt fred'], [5, 'Molt fred'], [9.99, 'Molt fred'],
  [10, 'Temperatura mitjana'], [15, 'Temperatura mitjana'], [19.99, 'Temperatura mitjana'],
  [20, 'Calor'], [25, 'Calor'], [30, 'Calor'], ['15', 'Temperatura mitjana'],
  [-0.01, 'Temperatura fora de rang (0–30 °C)'], [30.01, 'Temperatura fora de rang (0–30 °C)'],
  ['abc', 'Temperatura no vàlida'], ['', 'Temperatura no vàlida'],
  [null, 'Temperatura no vàlida'], [Infinity, 'Temperatura no vàlida'],
]) {
  test(`4.3: ${String(valor)} → ${esperado}`, () => {
    assert.equal(clasificarTemperatura(valor), esperado);
  });
}
