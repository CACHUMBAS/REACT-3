# Requisitos de React 3

Fuentes: `React_3.pdf` (7 páginas, numeración impresa 25–31) y `Desafio_REACT_3.docx`, proporcionados por el usuario. Este proyecto es independiente de React 2 y Lumemon.

## Ejercicios del PDF

| Apartado | Componente | Requisito |
| --- | --- | --- |
| 4.1 | `ProgramaPrecio.jsx` | Menores de 18: 0 €. Entre 18 y 64: 1 €. Desde 65 inclusive: 0 €. Mantener una constante de edad y funciones para cálculo, texto y resultado. |
| 4.2 | `ProgramaVotacion.jsx` | Ejecutar el ejemplo con edad 99. La validación debe devolver `false` si la entrada no es numérica o supera 100. Solo pueden votar las edades válidas desde 18. |
| 4.3 | `ProgramaTemperatura.jsx` | Usar una constante y funciones. Respuestas: `Molt fred`, `Temperatura mitjana`, `Calor`, para los intervalos entre 0 y 30 °C. El enunciado solapa 10 y 20; la interpretación se indicará en la entrega. La página no incluye código base pese a mencionarlo. |
| 4.4 | `ProgramaListadoAlumnos.jsx` | Con `Alumno.id === 1`, mostrar solo el nombre en `Detalles`. Con otro ID, mostrar ID, nombre y apellido en `Completo`. Documentar cómo cambiar la constante, guardar y comprobar ambos casos. |

Las páginas 25–27 explican el renderizado y el ternario; no plantean otra actividad entregable.

## Desafío GreenTech

Crear `EcoEnvios.jsx` e importarlo en `App.jsx`. Mantener las constantes `userAge`, `purchaseAmount` e `isEcoMember`.

Orden de evaluación:

1. Edad menor de 18 **o** compra superior a 50 €: `¡Envío Gratuito! (0€)`.
2. Si no se cumple lo anterior, miembro con `isEcoMember === true` y edad entre 18 y 65 inclusive: `Tarifa Eco: 1.50€`.
3. Los demás casos válidos: `Tarifa Estándar: 4.95€`.

El envío gratis prevalece sobre la membresía. Exactamente 50 € no cumple la condición de importe gratuito. Aunque el contexto habla de descuentos, no especifica otro descuento sobre el precio de los productos.

La lógica será pura y usará operadores ternarios. El contenedor principal de `EcoEnvios` tendrá `style={{...}}`, borde verde, radio y espaciado. No se necesitan backend, cuentas ni servicios externos.

## Entrega y comprobación

- Una aplicación React/Vite con los cinco componentes visibles y numerados.
- Constantes editables en los componentes, como piden los enunciados.
- Funciones de negocio separadas para probar la misma lógica que se presenta.
- README con instalación, ubicación de las soluciones, ejemplos y criterios de límites.
- Pruebas de edades límite, temperatura, prioridad de tarifas y pureza. Revisión visual y compilación antes de entregar.
- Repositorio nuevo en GitHub, ramas por bloque y commits descriptivos. No se solicita despliegue en Vercel.

## Decisiones confirmadas el 27 de octubre de 2026

- Instalación autorizada de React, React DOM y Vite únicamente en la carpeta de esta entrega.
- Repositorio público creado por el usuario: https://github.com/CACHUMBAS/REACT-3.git.
- Temperatura: `[0, 10)` corresponde a `Molt fred`, `[10, 20)` a `Temperatura mitjana` y `[20, 30]` a `Calor`. Fuera de ese rango, mostrar un aviso.
