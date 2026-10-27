# React 3 · Renderizado condicional y GreenTech

Soluciones de **React_3.pdf** (ejercicios 4.1–4.4, páginas impresas 28–31) y **Desafio_REACT_3.docx**. Los cinco componentes se muestran juntos en `src/App.jsx`. Las páginas teóricas del PDF explican los conceptos y no contienen otra actividad entregable.

## Ejecutar

Necesitas Node.js 22.12 o superior. Se usan React 19.3.1, React DOM 19.3.1 y Vite 8.3.5, con versiones fijadas en el archivo de bloqueo. No se necesitan claves, cuentas ni backend para ejecutar los ejercicios.

```sh
git clone https://github.com/CACHUMBAS/REACT-3.git
cd REACT-3
npm ci
npm run dev
```

Abre la dirección que aparece en la terminal. `npm start` también inicia Vite. En PowerShell, si se bloquea `npm.ps1`, puedes usar `npm.cmd ci` y `npm.cmd run dev` sin modificar la política del equipo.

## Dónde está cada solución

| Actividad | Componente | Constantes iniciales | Resultado |
| --- | --- | --- | --- |
| 4.1 · Autobús | [ProgramaPrecio.jsx](src/ProgramaPrecio.jsx) | `edad = 25` | `El precio es 1 euro` |
| 4.2 · Votación | [ProgramaVotacion.jsx](src/ProgramaVotacion.jsx) | `edad = 99` | `Mayor de edad. Puede votar` |
| 4.3 · Temperatura | [ProgramaTemperatura.jsx](src/ProgramaTemperatura.jsx) | `temperatura = 15` | `Temperatura mitjana` |
| 4.4 · Alumnos | [ProgramaListadoAlumnos.jsx](src/ProgramaListadoAlumnos.jsx) | `Alumno.id = 1` | `Ana` |
| Desafío GreenTech | [EcoEnvios.jsx](src/EcoEnvios.jsx) | `userAge = 29`, `purchaseAmount = 45`, `isEcoMember = true` | `Tarifa Eco: 1.50€` |

La lógica de los ejercicios se encuentra en [exercicis.js](src/logica/exercicis.js). La del desafío está en [eco-envios.js](src/logica/eco-envios.js). Los componentes importan estas funciones; las pruebas ejecutan las mismas funciones, sin duplicar las reglas.

## Cómo probar las constantes

Con Vite en ejecución, abre el componente, cambia la constante y guarda. No hay que introducir datos en un formulario: los documentos piden trabajar con constantes editables.

| Ejercicio | Valores | Resultados esperados |
| --- | --- | --- |
| 4.1 | `17`, `18`, `64`, `65` | 0 €, 1 €, 1 €, 0 € |
| 4.2 | `17`, `18`, `99`, `100`, `101`, `'abc'` | No, sí, sí, sí, no, no |
| 4.3 | `0`, `9.99`, `10`, `19.99`, `20`, `30` | Frío, frío, media, media, calor, calor |
| 4.4 | ID numérico `1`, después `2` | `Ana`, después `2 - Ana - Alvarez` |

En el **4.4**, `VerDatos` recibe el alumno mediante props. El ternario decide qué componente devolver: `Detalles` solo muestra el nombre, mientras que `Completo` muestra ID, nombre y apellido. Cambiar el ID no cambia los demás datos. Se conserva la comparación estricta `===`: el texto `'1'` no equivale al número `1` y muestra los datos completos. Se corrige la estructura HTML del ejemplo colocando el párrafo de `Completo` dentro de un `<li>`, para que sea válido como hijo de `<ul>`.

## Límites y decisiones

- **4.1:** la condición `edad >= 65` se evalúa primero. El enunciado da tarifas gratuitas tanto a menores de edad como a personas de 65 o más.
- **4.2:** `validarEdadVotacion` conserva el contrato del ejemplo: devuelve un número válido o `false`. Una edad superior a 100 devuelve exactamente `false`. Las entradas vacías, no numéricas, negativas o infinitas también se rechazan.
- **4.3:** el PDF solapa los límites de 10 y 20 °C. Con el criterio confirmado por el usuario, se adopta `[0, 10)`, `[10, 20)` y `[20, 30]`, dejándolo visible en el componente. Fuera del intervalo se muestra `Temperatura fora de rang (0–30 °C)`; no se inventa una cuarta categoría meteorológica. La página 30 menciona un código base, pero no lo incluye.
- Se conservan los mensajes en el idioma en que aparecen en los enunciados. La documentación y las ayudas están en español.

## Reglas de GreenTech

Las condiciones se evalúan en este orden, mediante ternarios:

1. `userAge < 18 || purchaseAmount > 50`: **¡Envío Gratuito! (0€)**.
2. Si no hay gratuidad, `isEcoMember === true && userAge >= 18 && userAge <= 65`: **Tarifa Eco: 1.50€**.
3. Resto de casos válidos: **Tarifa Estándar: 4.95€**.

Exactamente 50 € no basta para el envío gratuito; 50.01 € sí. Tener 65 años todavía permite la tarifa Eco; tener 66 ya no, aunque se mantiene la gratuidad cuando la compra supera 50 €. La membresía no puede sustituir un envío que ya es gratuito.

`calcularTarifaEnvio` devuelve **céntimos enteros** (0, 150 o 495). `mensajeEnvio` los transforma en el texto solicitado. Ambas son funciones puras: no escriben en variables externas, no leen el DOM, no usan aleatoriedad ni dependen de la hora. Los mismos parámetros producen el mismo resultado. El contenedor principal de `EcoEnvios` usa explícitamente `style={{...}}` para el fondo, borde verde, esquinas y padding.

El contexto habla de descuentos, pero las reglas concretas solo especifican tarifas de envío. No se aplica un descuento adicional al precio de los productos.

## Comprobar el proyecto

```sh
npm test          # Lógica, casos límite y renderizado de alumnos
npm run build    # Compilación de todos los componentes
npm run check    # Pruebas y compilación
npm run preview  # Ver la compilación localmente
```

Las pruebas utilizan `node:test`, incluido en Node.js. Incluyen límites de edades, datos inválidos, temperatura, prioridad de gratuidad y repetibilidad de las funciones. Las pruebas del ejercicio 4.4 cargan el JSX mediante Vite y lo renderizan con React DOM para comprobar las dos ramas del ternario. El estado de verificación de la entrega se recoge en [docs/VERIFICACION.md](docs/VERIFICACION.md).

## Git

- `feat/react-3-exercises`: soluciones del PDF y presentación base.
- `feat/greentech-envios`: desafío del Word, integración y documentación de entrega.
- `main`: entrega completa comprobada.

Los enunciados originales no se copian al repositorio. Se entrega el código de las soluciones, la documentación y las pruebas. No se incluyen `node_modules`, `dist`, datos privados ni archivos de otros proyectos.
