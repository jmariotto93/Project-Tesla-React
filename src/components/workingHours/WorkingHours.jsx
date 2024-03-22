import React from 'react'
import './styles.css'
import { LiWorkingHours } from '../liWorkingHours/LiWorkingHours'

export const WorkingHours = () => {
  return (
    <section id="horarios" className="container-parallax5">
        <h2>HORÁRIOS DE FUNCIONAMENTO</h2>

        <div>
            <ul className="lista-horarios">
            
               <LiWorkingHours 
                    week={"Segunda"}
                    hours={"09:00 - 18:30"}
                />

                <LiWorkingHours 
                    week={"Terça"}
                    hours={"09:00 - 18:30"}
                />

                <LiWorkingHours 
                    week={"Quarta"}
                    hours={"09:00 - 18:30"}
                />

                <LiWorkingHours 
                    week={"Quinta"}
                    hours={"09:00 - 18:30"}
                />

                <LiWorkingHours 
                    week={"Sexta"}
                    hours={"09:00 - 18:30"}
                />

                <LiWorkingHours 
                    week={"Sábado"}
                    hours={"Fechado"}
                    ClassName={"texto-vermelho"}
                />

                <LiWorkingHours 
                    week={"Domingo"}
                    hours={"Fechado"}
                    ClassName={"texto-vermelho"}
                />
                
            </ul>
        </div>
    </section>
  )
}
