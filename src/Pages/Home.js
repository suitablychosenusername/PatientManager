import React from 'react';
import './Home.css'
import HomeButton from './Icons/HomeButton.png'
import CalendarioButton from './Icons/CalendarioButton.png'
import PacienteButton from './Icons/PacienteButton.png'
import ProntuarioButton from './Icons/ProntuarioButton.png'

export default function Home(){


  return(
    <div className="App">
    <div className="Menu">
      <a href='/'><img className="MenuB" src={HomeButton} alt="a"/></a>
      <a href='/Calendario'><img className="MenuB" src={CalendarioButton} alt="a"/></a>
      <a href='/Paciente'><img className="MenuB" src={PacienteButton} alt="a"/></a>
      <a href='/Prontuario'><img className="MenuB" src={ProntuarioButton} alt="a"/></a>
    </div>
      <header className="App-header">
        <p>
          Home
        </p>
      </header>
    </div>
  );
}