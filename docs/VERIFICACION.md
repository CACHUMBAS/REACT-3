# Verificación de React 3

Comprobaciones realizadas el 27 de octubre de 2026, con Node.js 24.16.0.

## Enunciados y reglas

- Lectura completa de los dos enunciados y revisión visual de la página de temperatura para confirmar que no hay un ejemplo de código omitido en la extracción.
- Criterio de temperatura confirmado por el usuario: 10 °C pertenece al intervalo medio y 20 °C al de calor. El README explica los intervalos completos.
- Revisión del orden de las condiciones: 65 años en autobús, 100 años en votación, 50 € exactos en GreenTech y prioridad del envío gratuito.

## Pruebas y compilación

- Dependencias instaladas en esta carpeta con autorización del usuario.
- `npm run check`: **76 pruebas correctas, 0 fallos**, y compilación de Vite correcta.
- 53 pruebas de lógica de los ejercicios del PDF y 20 del desafío GreenTech. Los casos de lógica se ejecutaron primero sobre funciones sin implementar, fallaron y pasaron tras implementar las reglas.
- 3 pruebas de renderizado real de JSX con React DOM para el ejercicio 4.4: el ID numérico `1` muestra solo el nombre; `2` y el texto `'1'` muestran los datos completos. También comprueban la estructura `<li>` y que el objeto recibido no se modifica.

## Revisión visual

- Aplicación abierta en el navegador: los cinco componentes presentan los resultados iniciales indicados en el README.
- Revisión del inicio y del widget GreenTech en escritorio; enlaces de navegación comprobados.
- Revisión con ventanas incrustadas de 320 y 390 px: cabecera y navegación adaptadas, y datos de GreenTech en una columna. Es una comprobación de diseño responsive, no una prueba en dispositivos físicos.
- Sin errores ni advertencias en la consola del navegador durante esta revisión.

Para repetir las comprobaciones: `npm ci` y `npm run check`. Para inspeccionar la interfaz: `npm run dev`.
