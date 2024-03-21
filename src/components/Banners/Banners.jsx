import React from 'react'
import './styles.css'
export const Banners = ({subTitle, className}) => {
  return (
    <section className={className}>
        <h3>{subTitle}</h3>
    </section>
  )
}
