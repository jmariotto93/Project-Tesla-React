import React from 'react'
import './styles.css'

export const BannerMain = ({className, title}) => {
  return (
    <section id="banner" className={className}>
        <div>
            <h1>{title} </h1>
        </div>
    </section>
  )
}
