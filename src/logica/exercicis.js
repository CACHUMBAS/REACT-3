// Convierte números y texto numérico sin aceptar campos vacíos ni booleanos.
export function numeroDesdeDato(dato) {
  return typeof dato === 'number'
    ? dato
    : typeof dato === 'string' && dato.trim() !== ''
      ? Number(dato)
      : NaN;
}

// 4.1. La condición de 65 años se comprueba antes que la mayoría de edad.
export function comprobarPrecio(dato) {
  const edad = numeroDesdeDato(dato);
  return !Number.isFinite(edad) || edad < 0
    ? null
    : edad >= 65
      ? 0
      : edad >= 18
        ? 1
        : 0;
}

export function textoFinalPrecio(valor) {
  return valor === null
    ? 'Edad no válida'
    : `El precio es ${valor} ${valor === 1 ? 'euro' : 'euros'}`;
}

export function inicioPrecio(datoedad) {
  const precio = comprobarPrecio(datoedad);
  return textoFinalPrecio(precio);
}

// 4.2. Se conserva el contrato del ejemplo: número válido o false.
export function validarEdadVotacion(dato) {
  const valor = numeroDesdeDato(dato);
  return !Number.isFinite(valor) || valor < 0 || valor > 100 ? false : valor;
}

export function comprobarMayoriaEdad(edad) {
  return edad < 18 ? false : true;
}

export function inicioVotacion(dato) {
  const edad = validarEdadVotacion(dato);
  const mayorEdad = edad !== false && comprobarMayoriaEdad(edad);
  return mayorEdad ? 'Mayor de edad. Puede votar' : 'No puede votar';
}

// 4.3. Se resuelve el solapamiento usando [0, 10), [10, 20) y [20, 30].
export function clasificarTemperatura(dato) {
  const temperatura = numeroDesdeDato(dato);
  return !Number.isFinite(temperatura)
    ? 'Temperatura no vàlida'
    : temperatura < 0 || temperatura > 30
      ? 'Temperatura fora de rang (0–30 °C)'
      : temperatura < 10
        ? 'Molt fred'
        : temperatura < 20
          ? 'Temperatura mitjana'
          : 'Calor';
}
