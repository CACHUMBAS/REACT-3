// Función pura: recibe los tres datos y devuelve la tarifa en céntimos.
// La gratuidad se evalúa primero, por delante de la membresía.
export function calcularTarifaEnvio(userAge, purchaseAmount, isEcoMember) {
  const datosValidos = Number.isFinite(userAge) && userAge >= 0
    && Number.isFinite(purchaseAmount) && purchaseAmount >= 0;

  return !datosValidos
    ? null
    : userAge < 18 || purchaseAmount > 50
      ? 0
      : isEcoMember === true && userAge >= 18 && userAge <= 65
        ? 150
        : 495;
}

export function mensajeEnvio(tarifa) {
  return tarifa === null
    ? 'Datos no válidos'
    : tarifa === 0
      ? '¡Envío Gratuito! (0€)'
      : tarifa === 150
        ? 'Tarifa Eco: 1.50€'
        : 'Tarifa Estándar: 4.95€';
}
