import React from 'react'
import './styles.css'

export const WorkingHours = () => {
  return (
    <section id="horarios" className="container-parallax5">
        <h2>HORÁRIOS DE FUNCIONAMENTO</h2>

        <div>
            <ul className="lista-horarios">
                <li>
                    <h3>Segunda</h3>
                    <div></div>
                    <p>09:00 - 18:30</p>
                </li>
                <li>
                    <h3>Terça</h3>
                    <div></div>
                    <p>09:00 - 18:30</p>
                </li>
                <li>
                    <h3>Quarta</h3>
                    <div></div>
                    <p>09:00 - 18:30</p>
                </li>
                <li>
                    <h3>Quinta</h3>
                    <div></div>
                    <p>09:00 - 18:30</p>
                </li>
                <li>
                    <h3>Sexta</h3>
                    <div></div>
                    <p>09:00 - 18:30</p>
                </li>
                <li>
                    <h3>Sábado</h3>
                    <div></div>
                    <span className="texto-vermelho">Fechado</span>
                </li>
                <li>
                    <h3>Domingo</h3>
                    <div></div>
                    <span className="texto-vermelho">Fechado</span>
                </li>
            </ul>
        </div>
    </section>
  )
}
