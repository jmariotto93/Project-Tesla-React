import React from 'react'
import './styles.css'

export const Links = ({anchor, Href}) => {
  return (
    <>
      <a href={Href}>{anchor}</a>
    </>
  )
}
