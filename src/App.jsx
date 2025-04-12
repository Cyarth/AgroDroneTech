import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Servicios from './pages/Servicios.jsx';
import Contacto from './components/Contacto.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
