import React from 'react'
import styles from './components.module.css'
function Mainhome() {
  return (
    <main id={styles.mainContainer}>
        <article>
          <h1>Bienvenido {/* here's will go the name for the person who has logging in the game */} </h1>
          <h2>Para comenzar a jugar dale al boton que dice Iniciar</h2>
        </article>
        <form id={styles.form} className=''>       
          <button id={styles.buttonMainhome}> Iniciar</button>
          <button id={styles.buttonMainhome}>Dificultad</button>
          <button id={styles.buttonMainhome}>Logros</button>
        </form>
    </main>
  )
}

export default Mainhome