import React from 'react';
import './Home.css'
import HomeButton from './Icons/HomeButton.png'
import CalendarioButton from './Icons/CalendarioButton.png'
import PacienteButton from './Icons/PacienteButton.png'
import ProntuarioButton from './Icons/ProntuarioButton.png'
import Remove from './Icons/Remove.png'
import Accept from './Icons/Accept.png'
import Update from './Icons/Update.png'
import Add from './Icons/Add.png'

export default function Calendario(){

  return(
    <div className="App">
    <div className="Menu">
      <a href='/'><img className="MenuB" src={HomeButton} alt="a"/></a>
      <a href='/Calendario'><img className="MenuB" src={CalendarioButton} alt="a"/></a>
      <a href='/Paciente'><img className="MenuB" src={PacienteButton} alt="a"/></a>
      <a href='/Prontuario'><img className="MenuB" src={ProntuarioButton} alt="a"/></a>
    </div>
    
      <div id="divOptions">
          <select id="Day">
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
          <select id="Month">
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
          <select id="Year">
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
          <select id="Dr">
            <option>Dr. Fulanesco</option>
            <option>Dra. Beltranberg</option>
            <option>Dra. Fulanovski</option>
          </select>
        </div>
        
      <header className="App-header">
        <div id="divTableCalendario">
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
              <tr>
              <td>cell1_14</td>
              <td>cell2_14</td>
              <td>cell3_14</td>
              <td>cell4_14</td>
              <td>cell5_14</td>
              </tr>
              <tr>
              <td>cell1_15</td>
              <td>cell2_15</td>
              <td>cell3_15</td>
              <td>cell4_15</td>
              <td>cell5_15</td>
              </tr>
              <tr>
              <td>cell1_16</td>
              <td>cell2_16</td>
              <td>cell3_16</td>
              <td>cell4_16</td>
              <td>cell5_16</td>
              </tr>
              <tr>
              <td>cell1_17</td>
              <td>cell2_17</td>
              <td>cell3_17</td>
              <td>cell4_17</td>
              <td>cell5_17</td>
              </tr>
              <tr>
              <td>cell1_18</td>
              <td>cell2_18</td>
              <td>cell3_18</td>
              <td>cell4_18</td>
              <td>cell5_18</td>
              </tr>
              <tr>
              <td>cell1_19</td>
              <td>cell2_19</td>
              <td>cell3_19</td>
              <td>cell4_19</td>
              <td>cell5_19</td>
              </tr>
              <tr>
              <td>cell1_20</td>
              <td>cell2_20</td>
              <td>cell3_20</td>
              <td>cell4_20</td>
              <td>cell5_20</td>
              </tr>
              </tbody>
              </table>
        </div>

        <div id="Calendario">
          Coming soon...
        </div>

        <img id="Remove" src={Remove} alt="a"/>
        <img id="Accept" src={Accept} alt="a"/>
        <img id="Update" src={Update} alt="a"/>
        <img id="Add" src={Add} alt="a"/>
      </header>
    </div>
  );
}