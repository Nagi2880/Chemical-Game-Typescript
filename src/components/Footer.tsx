import React from 'react'
import styles from './components.module.css'
function Footer() {
  var date =  new Date()
  var year = date.getFullYear()
  return (
    <footer id={styles.footerContainer}>
        <span>{`©${year} All right reserved`}</span>
    </footer>
  )
}

export default Footer