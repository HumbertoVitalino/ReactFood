
import Header from 'components/header';
import Menu from 'components/menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='cardapio' element={<Cardapio />} />
      </Routes>
    </Router>
  );
}