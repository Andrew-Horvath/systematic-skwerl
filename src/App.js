import './scss/App.scss';
import { Routes, Route } from 'react-router-dom';
// import Header from "./components/Header";
// import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import Inventory from "./pages/Inventory";
import Recipes from "./pages/Recipes";
import Invoices from "./pages/Invoices";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from './pages/Signup';

function App() {
  // function here to redirect users that are not logged in
  return (
    <div className="app">
      <Nav />
      <main className="app-main">
              
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='inventory' element={<Inventory />} />
        <Route path='recipes' element={<Recipes />} />
        <Route path='invoices' element={<Invoices />} />
        <Route path='settings' element={<Settings />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
          </Routes>
</main>
    </div>
  );
}

export default App;
