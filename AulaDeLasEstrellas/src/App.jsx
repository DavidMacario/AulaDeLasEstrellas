import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Inicio from './pages/Inicio';
import Aula from './pages/Aula';
import Horario from './pages/Horario';
import Familias from './pages/Familias';
import Recursos from './pages/Recursos';

function App() {
  return (
    <div className="flex min-h-screen bg-backgroundGreen text-textGreen font-fredoka">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/aula" element={<Aula />} />
          <Route path="/horario" element={<Horario />} />
          <Route path="/familias" element={<Familias />} />
          <Route path="/recursos" element={<Recursos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
