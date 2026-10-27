import test from 'node:test';
import assert from 'node:assert/strict';
import {
  comprobarPrecio, textoFinalPrecio, inicioPrecio,
  validarEdadVotacion, comprobarMayoriaEdad, inicioVotacion,
} from '../src/logica/exercicis.js';

for (const [edad, esperado] of [[0, 0], [17, 0], [18, 1], [25, 1], [64, 1], [65, 0], [99, 0], ['18', 1]]) {
  test(`4.1: edad ${edad} → ${esperado} €`, () => {
    assert.equal(comprobarPrecio(edad), esperado);
  });
}

test('4.1: las funciones encadenadas generan el resultado del ejemplo', () => {
  assert.equal(textoFinalPrecio(1), 'El precio es 1 euro');
  assert.equal(inicioPrecio(25), 'El precio es 1 euro');
  assert.equal(inicioPrecio(65), 'El precio es 0 euros');
});

for (const entrada of ['abc', '', ' ', null, undefined, true, -1, NaN, Infinity]) {
  test(`4.1: no se asigna una tarifa a una edad inválida (${String(entrada)})`, () => {
    assert.equal(comprobarPrecio(entrada), null);
    assert.equal(inicioPrecio(entrada), 'Edad no válida');
  });
}

for (const [entrada, esperado] of [[0, 0], [17, 17], [18, 18], [99, 99], [100, 100], ['99', 99]]) {
  test(`4.2: validar conserva la edad válida ${entrada}`, () => {
    assert.equal(validarEdadVotacion(entrada), esperado);
  });
}

for (const entrada of [101, 100.1, '101', 'abc', -1, '', ' ', null, undefined, true, NaN, Infinity]) {
  test(`4.2: validar devuelve false para ${String(entrada)}`, () => {
    assert.equal(validarEdadVotacion(entrada), false);
    assert.equal(inicioVotacion(entrada), 'No puede votar');
  });
}

test('4.2: solo se admite el voto entre 18 y 100 inclusive', () => {
  assert.equal(comprobarMayoriaEdad(17), false);
  assert.equal(comprobarMayoriaEdad(18), true);
  assert.equal(inicioVotacion(0), 'No puede votar');
  assert.equal(inicioVotacion(17), 'No puede votar');
  assert.equal(inicioVotacion(18), 'Mayor de edad. Puede votar');
  assert.equal(inicioVotacion(99), 'Mayor de edad. Puede votar');
  assert.equal(inicioVotacion(100), 'Mayor de edad. Puede votar');
});
