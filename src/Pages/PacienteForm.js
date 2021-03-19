import React from 'react';
import './Home.css'
import SaveP from './Icons/SaveP.png'
import CancelP from './Icons/CancelP.png'

export default function PacienteForm(){

  return(
    <div className="App">
        <div id="BFolderItens" name="DivItens">
          Nome: <input type="text" id="Nome"></input>
          Idade: <input type="text" id="Idade"></input>
          Sexo: <input type="text" id="Sexo"></input>
          <br></br>
          Data de Nascimento: <input type="text" id="DataNasc"></input>
          CPF: <input type="text" id="CPF"></input>
          Estado Civil: <input type="text" id="EstadoCivil"></input>
          <br></br>
          Telefone: <input type="text" id="DDD"></input><input type="text" id="Telefone"></input>
          Telefone 2: <input type="text" id="DDD"></input><input type="text" id="Telefone"></input>
          Email: <input type="text" id="Email"></input>
          <br></br>
          Endereço: <input type="text" id="Endereco"></input>
          Nº: <input type="text" id="Numero"></input>
          <br></br>
          Complemento: <input type="text" id="Complemento"></input>
          <br></br>
          Bairro: <input type="text" id="Bairro"></input>
          UF: <input type="text" id="UF"></input>
          CEP: <input type="text" id="CEP"></input>

          <img id="SaveP" src={SaveP} alt="a"/>
          <img id="CancelP" src={CancelP} alt="a"/>
        </div>
    </div>
  );
}