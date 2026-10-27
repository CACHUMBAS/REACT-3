import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

let vite;
let VerDatos;

before(async () => {
  vite = await createServer({
    root: fileURLToPath(new URL('..', import.meta.url)),
    configFile: false,
    server: { middlewareMode: true, hmr: false, watch: null },
    appType: 'custom',
    logLevel: 'error',
  });
  ({ VerDatos } = await vite.ssrLoadModule('/src/ProgramaListadoAlumnos.jsx'));
});

after(async () => { await vite?.close(); });

for (const [id, esperado] of [[1, 'Ana'], [2, '2 - Ana - Alvarez'], ['1', '1 - Ana - Alvarez']]) {
  test(`4.4: id ${JSON.stringify(id)} renderiza los datos correspondientes`, () => {
    const datos = Object.freeze({ id, nombre: 'Ana', apellido: 'Alvarez' });
    const html = renderToStaticMarkup(React.createElement(VerDatos, { datos }));
    const textoVisible = html.replace(/<[^>]*>/g, '').trim();
    assert.equal(textoVisible, esperado);
    // Ambas ramas son elementos válidos de la lista que las contiene.
    assert.match(html, /^<li>.*<\/li>$/);
    assert.deepEqual(datos, { id, nombre: 'Ana', apellido: 'Alvarez' });
  });
}
