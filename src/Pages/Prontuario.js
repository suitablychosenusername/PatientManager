import React from 'react';
import './Home.css'

import HomeButton from './Icons/HomeButton.png'
import CalendarioButton from './Icons/CalendarioButton.png'
import PacienteButton from './Icons/PacienteButton.png'
import ProntuarioButton from './Icons/ProntuarioButton.png'
import ProntuarioImage from './Icons/Prontuario.png'

export default function Prontuario(){

  return(
    <div className="App">
    <div className="Menu">
      <a href='/'><img className="MenuB" src={HomeButton} alt="a"/></a>
      <a href='/Calendario'><img className="MenuB" src={CalendarioButton} alt="a"/></a>
      <a href='/Paciente'><img className="MenuB" src={PacienteButton} alt="a"/></a>
      <a href='/Prontuario'><img className="MenuB" src={ProntuarioButton} alt="a"/></a>
    </div>
      <header className="App-header">
        <div id="divBox">
          <ul class="tree">
          <li>
            <input class="tree-toggle" type="checkbox" id="tree-toggle-01" />
            <label class="tree-toggle-label" for="tree-toggle-01">2019</label>
            <ul class="subtree">
              <li>
                <input class="tree-toggle" type="checkbox" id="tree-toggle-02" />
                <label class="tree-toggle-label" for="tree-toggle-02">Janeiro</label>
                <ul class="subtree">
                  <li>01/01/2019</li>                    
                  <li>25/01/2019</li>
                </ul>
              </li>
              <li>
                <input class="tree-toggle" type="checkbox" id="tree-toggle-03" />
                <label class="tree-toggle-label" for="tree-toggle-03">Fevereiro</label>
                <ul class="subtree">
                  <li>28/02/2019</li>
                </ul>
              </li>
              <li>
                <input class="tree-toggle" type="checkbox" id="tree-toggle-04" />
                <label class="tree-toggle-label" for="tree-toggle-04">Agosto</label>
                  <ul class="subtree">
                  <li>05/08/2019</li>
                </ul>
                </li>
            </ul>
          </li>
          <li>
            <input class="tree-toggle" type="checkbox" id="tree-toggle-05" />
            <label class="tree-toggle-label" for="tree-toggle-05">2020</label>
            <ul class="subtree">
              <li>
                <input class="tree-toggle" type="checkbox" id="tree-toggle-06" />
                <label class="tree-toggle-label" for="tree-toggle-06">Janeiro</label>
                <ul class="subtree">
                  <li>01/01/2020</li>                    
                  <li>25/01/2020</li>
                </ul>
              </li>
              <li>
                <input class="tree-toggle" type="checkbox" id="tree-toggle-07" />
                <label class="tree-toggle-label" for="tree-toggle-07">Fevereiro</label>
                <ul class="subtree">
                  <li>28/02/2020</li>
                </ul>
              </li>
              <li>
                <input class="tree-toggle" type="checkbox" id="tree-toggle-08" />
                <label class="tree-toggle-label" for="tree-toggle-08">Agosto</label>
                  <ul class="subtree">
                  <li>05/08/2020</li>
                  <li>10/08/2020</li>
                </ul>
                </li>
            </ul>
          </li>
        </ul>
        </div>

        <div id="divTable">
          Sintomas/Queixas: <input type="text" id="Sintomas"></input>
          <br></br>
          Histórico: <input type="text" id="Historico"></input>
          <br></br>
          Tratamento Indicado: <input type="text" id="Tratamento"></input>
          <br></br>
          Andamento: <input type="text" id="Andamento"></input>
          <br></br>
          Receita: <input type="text" id="Receita"></input>
          <br></br>
          Observações: <input type="text" id="Observacoes"></input>
          <br></br>
        </div>

        <img id="Prontuario" src={ProntuarioImage} alt="a"/>
      </header>
    </div>
  );
}