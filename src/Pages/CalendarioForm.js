import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Home.css';

export default function CalendarioForm(){
  const navigate = useNavigate();

  return(
    <div className="App">
    <header className="App-header">
      <div id="calendarioForm">
        Nome do Paciente: <input type="text" id="NomeP"></input>
        <br></br>
        Email: <input type="text" id="EmailCF"></input> 
        Enviar Lembrete? 
        <label class="switch">
          <input type="checkbox"></input>
          <span class="slider round"></span>
        </label>
        <br></br>
        Tipo de Agendamento:
        <select id="Agendamento">
            <option>Primeira Consulta</option>
            <option>Acompanhamento</option>
            <option>Teste Cognitivo</option>
          </select>
          <br></br>
          Hora: <input type="text" id="Hora"></input> 
          Data:
          <select id="DayCF">
            <option>Day</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
          </select>
          <select id="MonthCF">
            <option>Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
          <select id="YearCF">
            <option>Year</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>2014</option>
            <option>2013</option>
            <option>2012</option>
            <option>2011</option>
            <option>2010</option>
            <option>2009</option>
            <option>2008</option>
            <option>2007</option>
            <option>2006</option>
            <option>2005</option>
            <option>2004</option>
            <option>2003</option>
            <option>2002</option>
            <option>2001</option>
            <option>2000</option>
          </select>
          Observações:
          <br></br>
          <textarea id="Observacoes"></textarea>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p align="Center">Senha Funcionário: <input type="text" id="Senha"></input></p>
          <button id="Cancelar" onClick={() => navigate('/Calendario')}>Cancelar</button>
          <button id="Salvar" onClick={() => navigate('/Calendario')}>Salvar</button>
      </div>

      <div id="CFormTable">
        <table class="blueTable">
              <thead>
              <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Diagnóstico</th>
              <th>Primeira Consulta</th>
              <th>Última Consulta</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>cell1_1</td>
              <td>cell2_1</td>
              <td>cell3_1</td>
              <td>cell4_1</td>
              <td>cell5_1</td>
              </tr>
              <tr>
              <td>cell1_2</td>
              <td>cell2_2</td>
              <td>cell3_2</td>
              <td>cell4_2</td>
              <td>cell5_2</td>
              </tr>
              <tr>
              <td>cell1_3</td>
              <td>cell2_3</td>
              <td>cell3_3</td>
              <td>cell4_3</td>
              <td>cell5_3</td>
              </tr>
              <tr>
              <td>cell1_4</td>
              <td>cell2_4</td>
              <td>cell3_4</td>
              <td>cell4_4</td>
              <td>cell5_4</td>
              </tr>
              <tr>
              <td>cell1_5</td>
              <td>cell2_5</td>
              <td>cell3_5</td>
              <td>cell4_5</td>
              <td>cell5_5</td>
              </tr>
              <tr>
              <td>cell1_6</td>
              <td>cell2_6</td>
              <td>cell3_6</td>
              <td>cell4_6</td>
              <td>cell5_6</td>
              </tr>
              <tr>
              <td>cell1_7</td>
              <td>cell2_7</td>
              <td>cell3_7</td>
              <td>cell4_7</td>
              <td>cell5_7</td>
              </tr>
              <tr>
              <td>cell1_8</td>
              <td>cell2_8</td>
              <td>cell3_8</td>
              <td>cell4_8</td>
              <td>cell5_8</td>
              </tr>
              <tr>
              <td>cell1_9</td>
              <td>cell2_9</td>
              <td>cell3_9</td>
              <td>cell4_9</td>
              <td>cell5_9</td>
              </tr>
              <tr>
              <td>cell1_10</td>
              <td>cell2_10</td>
              <td>cell3_10</td>
              <td>cell4_10</td>
              <td>cell5_10</td>
              </tr>
              <tr>
              <td>cell1_11</td>
              <td>cell2_11</td>
              <td>cell3_11</td>
              <td>cell4_11</td>
              <td>cell5_11</td>
              </tr>
              <tr>
              <td>cell1_12</td>
              <td>cell2_12</td>
              <td>cell3_12</td>
              <td>cell4_12</td>
              <td>cell5_12</td>
              </tr>
              <tr>
              <td>cell1_13</td>
              <td>cell2_13</td>
              <td>cell3_13</td>
              <td>cell4_13</td>
              <td>cell5_13</td>
              </tr>
              </tbody>
              </table>
      </div>

      <div id="CFormCalendario">
        Coming soon...
      </div>

      <select id="DrCF">
            <option>Dr. Fulanesco</option>
            <option>Dra. Beltranberg</option>
            <option>Dra. Fulanovski</option>
          </select>
    </header>
    </div>
  );
}