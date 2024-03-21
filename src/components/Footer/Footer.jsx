import React from 'react'
import './styles.css'

export const Footer = ({developer, name}) => {
  return (
    <footer>
        <p></p>
        <p>&copy; {developer} <span> {name}</span></p>
    </footer>
  )
}
