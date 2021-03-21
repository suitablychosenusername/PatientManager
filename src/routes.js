import React from 'react';
import{
  Routes,
  Route
} from 'react-router-dom';

import Home from './Pages/Home';
import Calendario from './Pages/Calendario';
import CalendarioForm from './Pages/CalendarioForm';
import Paciente from './Pages/Paciente';
import PacienteForm from './Pages/PacienteForm';
import PacienteTable from './Pages/PacienteTable';
import Prontuario from './Pages/Prontuario';

export default function MainRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calendario" element={<Calendario />} />
       <Route path="/CalendarioForm" element={<CalendarioForm />} />
      <Route path="/Paciente" element={<Paciente />} />
      <Route path="/PacienteForm" element={<PacienteForm />} />
      <Route path="/PacienteTable" element={<PacienteTable />} />
      <Route path="/Prontuario" element={<Prontuario />} />
    </Routes>
  );
}