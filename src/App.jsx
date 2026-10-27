import React from 'react';
import ProgramaPrecio from './ProgramaPrecio.jsx';
import ProgramaVotacion from './ProgramaVotacion.jsx';
import ProgramaTemperatura from './ProgramaTemperatura.jsx';
import ProgramaListadoAlumnos from './ProgramaListadoAlumnos.jsx';

function Ejercicio({ numero, titulo, archivo, children }) {
  return (
    <section className="ejercicio" id={`ej-${numero}`} aria-labelledby={`titulo-${numero}`}>
      <header className="cabecera-ejercicio">
        <h2 id={`titulo-${numero}`}><span>{numero}</span> {titulo}</h2>
        <code>{archivo}</code>
      </header>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="saltar" href="#contenido">Saltar al contenido</a>
      <header className="portada">
        <div className="contenedor">
          <p className="etiqueta">DESARROLLO WEB · EJERCICIOS PRÁCTICOS</p>
          <h1>React 3<span>Renderizado condicional</span></h1>
          <p>Funciones puras y operadores ternarios, aplicados a cuatro ejercicios.</p>
          <nav aria-label="Ejercicios">
            <a href="#ej-4.1">4.1 · Autobús</a>
            <a href="#ej-4.2">4.2 · Votación</a>
            <a href="#ej-4.3">4.3 · Temperatura</a>
            <a href="#ej-4.4">4.4 · Alumnos</a>
          </nav>
        </div>
      </header>
      <main className="contenedor" id="contenido" tabIndex={-1}>
        <aside className="indicacion" aria-label="Cómo probar los ejercicios">
          <strong>Modifica la constante y observa el resultado</strong>
          <p>Con <code>npm run dev</code> activo, abre el archivo indicado, cambia su constante y guarda. React actualizará el ejemplo. El README recoge los valores que puedes probar.</p>
        </aside>
        <Ejercicio numero="4.1" titulo="Tarifa por edad" archivo="src/ProgramaPrecio.jsx"><ProgramaPrecio /></Ejercicio>
        <Ejercicio numero="4.2" titulo="Validar antes de votar" archivo="src/ProgramaVotacion.jsx"><ProgramaVotacion /></Ejercicio>
        <Ejercicio numero="4.3" titulo="Tres intervalos de temperatura" archivo="src/ProgramaTemperatura.jsx"><ProgramaTemperatura /></Ejercicio>
        <Ejercicio numero="4.4" titulo="Elegir qué datos mostrar" archivo="src/ProgramaListadoAlumnos.jsx"><ProgramaListadoAlumnos /></Ejercicio>
      </main>
      <footer className="contenedor">React 3 · Código, explicación de los límites y casos de prueba incluidos en el repositorio.</footer>
    </>
  );
}
