import React from 'react';
import './Home.css'
import HomeButton from './Icons/HomeButton.png'
import CalendarioButton from './Icons/CalendarioButton.png'
import PacienteButton from './Icons/PacienteButton.png'
import ProntuarioButton from './Icons/ProntuarioButton.png'
import Folder from './Icons/Folder.png'
import AdicionarP from './Icons/AdicionarP.png'
import EditarP from './Icons/EditarP.png'
import ExcluirP from './Icons/ExcluirP.png'
import PPaciente from './Icons/PPaciente.png'
import ListaPaciente from './Icons/ListaPaciente.png'
import PesquisarPaciente from './Icons/PesquisarPaciente.png'

export default function Paciente(){

  return(
    <div className="App">
    <div className="Menu">
      <a href='/'><img className="MenuB" src={HomeButton} alt="a"/></a>
      <a href='/Calendario'><img className="MenuB" src={CalendarioButton} alt="a"/></a>
      <a href='/Paciente'><img className="MenuB" src={PacienteButton} alt="a"/></a>
      <a href='/Prontuario'><img className="MenuB" src={ProntuarioButton} alt="a"/></a>
    </div>

      <header className="App-header">
        <div id="BFolder">
          <a href='/PacienteForm' target="PForm"><img id="AddP" src={AdicionarP} alt="a"/></a>
          <img id="EditP" src={EditarP} alt="a"/>
          <img id="DeleteP" src={ExcluirP} alt="a"/>
          <a href='/Prontuario'><img id="PPaciente" src={PPaciente} alt="a"/></a>
          <img id="DeleteP" src={ExcluirP} alt="a"/>
          <a href='/PacienteTable' target="PForm"><img id="ListaPaciente" src={ListaPaciente} alt="a"/></a>
          <a href='/PacienteForm' target="PForm"><img id="PesquisarPaciente" src={PesquisarPaciente} alt="a"/></a>
        </div>
        <iframe name="PForm" title="IFPForm" id="Iframe">
          
        </iframe>
          <img id="Folder" src={Folder} alt="a"/>
      </header>
    </div>
  );
}