import React from 'react'
import './styles.css'

export const Contacts = ({subTitle}) => {
    const contacts = {
        telephone: "(11) 99999-9999",
        email: "josemarioto@gmail.com",
        address: "Bela Vista - São Paulo",
    };

  return (
    <section id="contatos" className="container-parallax4">
    <div>
        <h2>{subTitle}</h2>
    </div>

    <div className="container-contatos">
        <p>Telefone & Whatsapp: {contacts.telephone}</p>
        <p>E-mail: {contacts.email}</p>
        <p>Endereço: {contacts.address}</p>
    </div>
</section>
  )
}
